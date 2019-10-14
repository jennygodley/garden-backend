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
    type: Boolean,
    required: false
  },
  directSow: {
    type: String,
    required: false
  },
  startIndoors: {
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
    required: true
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
