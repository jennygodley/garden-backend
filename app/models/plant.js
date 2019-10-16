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
  jan: {
    type: String,
    required: false
  },
  feb: {
    type: String,
    required: false
  },
  march: {
    type: String,
    required: false
  },
  april: {
    type: String,
    required: false
  },
  may: {
    type: String,
    required: false
  },
  june: {
    type: String,
    required: false
  },
  july: {
    type: String,
    required: false
  },
  aug: {
    type: String,
    required: false
  },
  sept: {
    type: String,
    required: false
  },
  oct: {
    type: String,
    required: false
  },
  nov: {
    type: String,
    required: false
  },
  dec: {
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
  checked: {
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
