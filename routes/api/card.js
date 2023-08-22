const express = require('express');
const Card = require('../../models/Card');
const cardCtrl = require('../../controllers/api/card');
const router = express.Router();

router.get('/seed', async (req, res) => {
  try {
    const response = await axios.get('https://api.pokemontcg.io/v2/cards', {
      params: {
        q: 'your_query_here',
        pageSize: 10,
      },
    });

    const cardsData = response.data.data;

    const cardsToSeed = cardsData.map(card => ({
      name: card.name,
      set: card.set.name,
      imageUrl: card.images.small,
    }));

    await Card.create(cardsToSeed);

    res.status(200).json({ message: 'Database seeded successfully!' });
  } catch (error) {
    console.error('Error seeding the database:', error);
    res.status(500).json({ error: 'An error occurred while seeding the database.' });
  }
});

module.exports = router;