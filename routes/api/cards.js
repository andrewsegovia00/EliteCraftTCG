// const express = require('express');
// const pokemon = require('pokemontcgsdk');
// const Card = require('../../models/Card');
// const router = express.Router();

// pokemon.configure({ apiKey: import.meta.env.POKE_APIKEY});

// router.get('/seed', async (req, res) => {
//   try {
//     const cardsData = await pokemon.card.where({
//       q: '',
//       pageSize: 10,
//     });

//     const cardsToSeed = cardsData.data.map(card => ({
//       name: card.name,
//       set: [{ name: card.set.name }],
//       imageUrl: card.images.small,
//     }));

//     await Card.create(cardsToSeed);

//     res.status(200).json({ message: 'Database seeded successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while seeding the database.' });
//   }
// });

// module.exports = router;
