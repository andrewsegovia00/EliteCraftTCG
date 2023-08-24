require('dotenv').config();
require('./config/database');

const Set = require('./models/set');
const Card = require('./models/card');

const pokemon = require('pokemontcgsdk'); 

// IIFE
(async function () {
  // Fetch cards from the Pokémon TCG library for a specific set
  const cardsData = await pokemon.card.all({ set: 'base1' }); // Replace 'base1' with the desired set code

  // Create Card documents and store their ObjectIds
  const cardIds = await Promise.all(cardsData.map(async cardData => {
    const card = await Card.create(cardData);
    return card._id;
  }));

  // Create a Set document and associate the Card documents
  const set = await Set.create({
    name: 'Base Set', // Replace with the set name
    imageUrl: 'https://example.com/base-set-image', // Replace with the set image URL
    totalCards: cardsData.length,
    legality: {
      standard: 'Legal',
      expanded: 'Legal',
      unlimited: 'Legal',
    },
    cards: cardIds,
  });

  console.log('Set and Cards created:', set);

  process.exit();
})();
