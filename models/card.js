const mongoose = require('mongoose');
// const setSchema = require('./set');

const cardSchema = new mongoose.Schema({
  name: {
    type: String
  },
  imageUrl: {
    type: String
  },
  number: {
    type: Number
  },
  set: {
    type: String
  },
  typeImg: { 
    type: String
  },
  legality: {
    standard: String,
    expanded: String,
    unlimited: String,
  },
  set_id: { 
    type: String
  }
});

module.exports = mongoose.model('Card', cardSchema);

