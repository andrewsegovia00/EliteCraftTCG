
require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Card = require('./models/card');
const Set = require('./models/set');
const Deck = require('./models/deck');

let user, card, set, deck;
let users, cards, sets, decks;
