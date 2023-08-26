require('dotenv').config();
require('./config/database');

const Deck = require('./models/deck');

// IIFE
(async function () {
  try {
        const createdDeck = await Deck.create({
            title: 'test',
            totalCards: 0,
            cards: [],
        });
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
  process.exit();
})();
