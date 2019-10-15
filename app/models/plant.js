const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  plantName: {
    type: String,
    required: true
  },
  hardinessZone: {
    type: String,
    required: false
  },
  inBloomStart: {
    type: String,
    required: false
  },
  inBloomEnd: {
    type: String,
    required: false
  },
  whenToPlant: {
    type: String,
    required: false
  },
  sunNeeds: {
    type: String,
    required: false
  },
  perennial: {
    type: String,
    required: false
  },
  directSow: {
    type: String,
    required: false
  },
  startIndoors: {
    type: String,
    required: false
  },
  notes1: {
    type: String,
    required: false
  },
  notes2: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  garden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GardenPlot',
    required: false
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Plant', plantSchema)
