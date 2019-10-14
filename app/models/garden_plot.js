const mongoose = require('mongoose')

const gardenPlotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  plant: {
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

module.exports = mongoose.model('GardenPlot', gardenPlotSchema)
