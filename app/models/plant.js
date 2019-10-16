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
    type: Boolean,
    required: false
  },
  feb: {
    type: Boolean,
    required: false
  },
  march: {
    type: Boolean,
    required: false
  },
  april: {
    type: Boolean,
    required: false
  },
  may: {
    type: Boolean,
    required: false
  },
  june: {
    type: Boolean,
    required: false
  },
  july: {
    type: Boolean,
    required: false
  },
  aug: {
    type: Boolean,
    required: false
  },
  sept: {
    type: Boolean,
    required: false
  },
  oct: {
    type: Boolean,
    required: false
  },
  nov: {
    type: Boolean,
    required: false
  },
  dec: {
    type: Boolean,
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
    type: Boolean,
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
