const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  plantName: {
    type: String,
    required: true
  },
  hardinessZone: {
    type: String,
    required: true
  },
  inBloomStart: {
    type: String,
    required: true
  },
  inBloomEnd: {
    type: String,
    required: true
  },
  whenToPlant: {
    type: String,
    required: true
  },
  sunNeeds: {
    type: String,
    required: true
  },
  perennial: {
    type: Boolean,
    required: true
  },
  directSow: {
    type: String,
    required: true
  },
  startIndoors: {
    type: Boolean,
    required: true
  },
  notes1: {
    type: String,
    required: true
  },
  notes2: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Plant', plantSchema)
