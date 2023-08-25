// const Set = require('../../models/set');
const Deck = require('../../models/card');

module.exports = {
  getAllDecks,
  getAllDecksByUserId,
  getOneDeckByUserId,
  createDeck,
//   editContents,
  deleteDeck,
  addCardsToDeck,
  deleteCardsToDeck,

};

async function getOneDeckByUserId(req, res) {
  try {
    const decks = await Deck.findById(req.params.userId && req.params.deckId );
    if (!decks) {
      return res.status(404).json({ message: 'Set not found' });
    }

    // const cards = await Card.find({ id: decks.cards.id }); 
    // res.json({ set, cards });
    // Is this necessary? Since Deck has a object reference to the cards, shouldn't 
    // we just use that? We want to return the one deck with
    // Information about the cards so we can populate them
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
async function getAllDecksByUserId(req, res) {
  try {
    const decks = await Deck.findById(req.params.userId);
    if (!decks) {
      return res.status(404).json({ message: 'Set not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAllDecks(req, res) {
    try {    
        const decks = await Deck.find({});
        res.json({ decks });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}

async function createDeck(req, res) {
    const [ title ] = req.body
    try {
        const createdDeck = await Deck.create({
            title: title,
            totalCards: 0,
            cards: [],
        });
        await createdDeck.save();
    } catch (err) {
    res.status(400).json(err);
    }
}

async function addCardsToDeck(req, res) {
    const [cardId, deckId, userId] = req.body;
    try {
        const deck = await Deck.find(deckId && userId);
        deck.cards.push(cardId);
        await deck.save();
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteCardsToDeck(req, res) {
    const [ cardId, deckId, userId ] = req.body
    try {
        const deck = await Deck.find(deckId && userId);
        deck.cards.delete(cardId);
        await deck.save();
    } catch (err) {
        res.status(400).json(err);
    }
}
async function deleteDeck(req, res) {
    const [ deckId, userId ] = req.body
    try {
        const deck = await Deck.find(deckId && userId);
        deck.delete();
    } catch (err) {
        res.status(400).json(err);
    }
}
