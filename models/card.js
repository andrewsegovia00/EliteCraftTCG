const mongoose = require('mongoose');
const setSchema = require('./set');


const cardSchema = new mongoose.Schema({
  name: String,
  set: [setSchema],
  imageUrl: String,
  legality: {
    unlimited: String,
    limited: String,
    banned: String,
  }
});

module.exports = mongoose.model('Card', cardSchema);

