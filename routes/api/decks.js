const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');

router.get('/', decksCtrl.getAllDecks);
router.get('/:userId/:deckId', decksCtrl.getOneDeckByUserId);
router.get('/:userId', decksCtrl.getAllDecksByUserId);
router.post('/create', decksCtrl.createDeck);
router.post('/:deckId/addCard', decksCtrl.addCardsToDeck)
router.post('/:deckId/deleteCard', decksCtrl.deleteCardsToDeck,)
router.post('/:deckId', decksCtrl.deleteDeck);

module.exports = router;


