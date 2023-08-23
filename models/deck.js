const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
  title: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Deck', deckSchema);