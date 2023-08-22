const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    name: String,
    image: String,
    
})

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

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
