// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Card = require('./models/card');
const Set = require('./models/set');
const Deck = require('./models/deck');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, card, set, deck;
let users, cards, sets, decks;
