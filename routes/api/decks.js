const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.get('/', decksCtrl.getAllDecks); 
router.post('/create', ensureLoggedIn, decksCtrl.createDeck);
router.get('/:userId', ensureLoggedIn, decksCtrl.getAllDecksByUserId);
router.post('/:deckId/addCard/:cardId', ensureLoggedIn, decksCtrl.addCardsToDeck);
router.post('/delete/:deckId', ensureLoggedIn, decksCtrl.deleteDeck);
router.post('/update/:deckId/', ensureLoggedIn, decksCtrl.updateDeck);

module.exports = router;


// router.post('/:deckId/deleteCard', decksCtrl.deleteCardsToDeck);
// router.get('/one/:deckId', ensureLoggedIn, decksCtrl.getOneDeckByUserId);