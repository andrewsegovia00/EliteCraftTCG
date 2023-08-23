const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
  title: {type: String, required: true},
//   comments: [],
//   likes: [],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Deck', deckSchema);