const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
  title: { type: String, required: true },
  totalCards: { type: Number },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card',
      max: 3, 
    },
  ],
}, {
  timestamps: true,
});

deckSchema.path('cards').validate(function(cards) {
  return cards.length <= 60;
}, 'The deck cannot have more than 60 cards.');

module.exports = mongoose.model('Deck', deckSchema);
