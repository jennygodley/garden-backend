// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for gardenPlots
const gardenPlot = require('../models/garden_plot')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { gardenPlot: { title: '', text: 'foo' } } -> { gardenPlot: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /gardenPlots
router.get('/gardenPlots', requireToken, (req, res, next) => {
  gardenPlot.find({ owner: req.user._id })
    .populate('owner')
    .populate('plant')
    .then(gardenPlots => {
      // `gardenPlots` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return gardenPlots.map(gardenPlot => gardenPlot.toObject())
    })
    // respond with status 200 and JSON of the gardenPlots
    .then(gardenPlots => res.status(200).json({ gardenPlots: gardenPlots }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /gardenPlots/5a7db6c74d55bc51bdf39793
router.get('/gardenPlots/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  gardenPlot.findById(id)
    .populate('owner')
    .populate('plant')
  // req.params.id will be set based on the `:id` in the route
  // gardenPlot.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "gardenPlot" JSON
    .then(gardenPlot => res.status(200).json({ gardenPlot: gardenPlot.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /gardenPlots
router.post('/gardenPlots', requireToken, (req, res, next) => {
  // set owner of new gardenPlot to be current user
  req.body.gardenPlot.owner = req.user.id

  gardenPlot.create(req.body.gardenPlot)
    // respond to succesful `create` with status 201 and JSON of new "gardenPlot"
    .then(gardenPlot => {
      res.status(201).json({ gardenPlot: gardenPlot.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /gardenPlots/5a7db6c74d55bc51bdf39793
router.patch('/gardenPlots/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.gardenPlot.owner

  gardenPlot.findById(req.params.id)
    .then(handle404)
    .then(gardenPlot => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, gardenPlot)

      // pass the result of Mongoose's `.update` to the next `.then`
      return gardenPlot.updateOne(req.body.gardenPlot)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// UPDATE
// PATCH /gardenPlots/5a7db6c74d55bc51bdf39793/plant
router.patch('/gardenPlots/:id/plant', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.gardenPlot.owner

  gardenPlot.findById(req.params.id)
    .then(handle404)
    .then(gardenPlot => {
      console.log(req.body.plant)
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, gardenPlot)

      // pass the result of Mongoose's `.update` to the next `.then`
      return gardenPlot.updateOne(req.body.gardenPlot)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /gardenPlots/5a7db6c74d55bc51bdf39793
router.delete('/gardenPlots/:id', requireToken, (req, res, next) => {
  gardenPlot.findById(req.params.id)
    .then(handle404)
    .then(gardenPlot => {
      // throw an error if current user doesn't own `gardenPlot`
      requireOwnership(req, gardenPlot)
      // delete the gardenPlot ONLY IF the above didn't throw
      gardenPlot.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
