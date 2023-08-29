
const Deck = require('../../models/deck');

module.exports = {
  getOneDeckByUserIdAndDeckId,
  getAllDecks,
  getAllDecksByUserId,
  getOneDeckByUserId,
  createDeck,
  deleteDeck,
  addCardsToDeck,
  deleteCardsToDeck,
  updateDeck,
};

async function getOneDeckByUserIdAndDeckId(req, res) {
  try {
      const decks = await Deck.findById(req.params.deckId);
      if (!decks) {
          return res.status(404).json({ message: 'Deck not found' });
      }
      res.json(decks);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
}

async function getAllDecksByUserId(req, res) {
  try {
      const decks = await Deck.find({ userId: req.user._id }).populate('cards');
      res.json(decks);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
}

async function getOneDeckByUserId(req, res) {
  try {
    const deck = await Deck.findOne({
      _id: req.body.deckId,
      userId: req.user._id
    }).populate('cards');
    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }
    res.json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAllDecks(req, res) {
    try {    
      const decks = await Deck.find({}).populate('userId').populate('cards');
        res.json({ decks });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}

async function createDeck(req, res) {
  const {title}  = req.body;
  const user_id = req.user._id;
    try {
        const createdDeck = await Deck.create({
            title: title,
            totalCards: 0,
            cards: [],
            userId: user_id,
        });
        const savedDeck = await createdDeck.save();
        res.status(201).json(savedDeck);
    } catch (err) {
    res.status(400).json(err);
    }
}

async function addCardsToDeck(req, res) {
    const {cardId, deckId} = req.body;
    const userId = req.user._id;
    try {
      const deck = await Deck.findOne({ _id: deckId, userId: userId });
        deck.totalCards += 1;
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
  const {deckId} = req.body;
  try {
    const deck = await Deck.findOneAndDelete({ _id: deckId });
    res.status(204).json();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateDeck(req, res) {
  try {
    const {deckId, title} = req.body;
    const deck = await Deck.findById(deckId);
    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }
    deck.title = title;
    await deck.save();
    res.status(200).json({ message: 'Deck updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
}


