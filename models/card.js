const mongoose = require('mongoose');

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
  typeImg: [],
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

