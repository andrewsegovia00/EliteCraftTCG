const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');

// router.get('/', decksCtrl.getAllDecks); 
router.post('/create', decksCtrl.createDeck);
router.get('/:userId', decksCtrl.getAllDecksByUserId);
// router.post('/:deckId/addCard', decksCtrl.addCardsToDeck);
// router.post('/:deckId/deleteCard', decksCtrl.deleteCardsToDeck);
router.post('/delete/:deckId', decksCtrl.deleteDeck);
router.post('/update/:deckId/', decksCtrl.updateDeck);

router.get('/:userId/:deckId', decksCtrl.getOneDeckByUserIdAndDeckId);

module.exports = router;