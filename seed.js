require('dotenv').config();
require('./config/database');

const Set = require('./models/set');
const Card = require('./models/card');

const pokemon = require('pokemontcgsdk'); 

// IIFE
(async function () {
  try {
    const sets = await pokemon.set.all({ q: 'series:Scarlet' });
    for (const set of sets) {
        const createdSet = await Set.create({
            name: set.name,
            set_id: set.id,
            imageUrl: set.images.logo,
            totalCards: set.total,
            legality: {
                standard: set.legalities.standard ? 'Legal' : '',
                expanded: set.legalities.expanded ? 'Legal' : '',
                unlimited: set.legalities.unlimited ? 'Legal' : '',
            },
            cards: [],
        });
        for (let j = 0; j < set.total; j++) {
            if(set.id === 'sv1')
            {
                j = 24;
            }
        const cardData = await pokemon.card.find(`${set.id}-${j + 1}`);
        console.log(cardData)
        const createdCard = await Card.create({
          name: cardData.name ? cardData.name : 'unknown',
          imageUrl: cardData.images.large ? cardData.images.large : 'unknown',
          number: cardData.number ? cardData.number : 'unknown',
          set: set.name ? set.name : 'unknown',
          typeImg: cardData.types ? cardData.types : 'unknown',
          legality: {
            standard: cardData.standard ? 'Legal' : '',
            expanded: cardData.expanded ? 'Legal' : '',
            unlimited: cardData.unlimited ? 'Legal' : '',
          },
          set_id: set._id,
        });

        createdSet.cards.push(createdCard._id);

        // Add a 2-second timeout after each card creation
        // await new Promise(resolve => setTimeout(resolve, 1000));
      }

      await createdSet.save();
      console.log('Set and Cards created:', createdSet);

      // Add a 5-second timeout after each set iteration
    //   await new Promise(resolve => setTimeout(resolve, 5000));
    }

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }

  process.exit();
})();
