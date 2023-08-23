const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
  name: {
    type: String, 
    required: true
},
  imageUrl: {
    type: String,
    required: true
}
  ,
  totalCards: {
    type: String,
    required: true
  },
  legality: {
    unlimited: String,
    limited: String,
    banned: String,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Deck', deckSchema);