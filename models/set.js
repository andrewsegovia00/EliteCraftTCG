const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = require('./card');

const setSchema = new Schema({
  name: {
    type: String, 
    required: true
},
  imageUrl: {
    type: String,
    required: true
},
  totalCards: {
    type: String,
    required: true
},
  legality: {
    standard: String,
    expanded: String,
    unlimited: String,
},
  set_id: { 
    type: String
},
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
}], 

}, {
  timestamps: true,
});

module.exports = mongoose.model('Set', setSchema);