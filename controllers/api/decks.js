// const Set = require('../../models/set');
const Deck = require('../../models/deck');

module.exports = {
  getOneDeckByUserIdAndDeckId,
  getAllDecks,
  getAllDecksByUserId,
  getOneDeckByUserId,
  createDeck,
//   editContents,
  deleteDeck,
  addCardsToDeck,
  deleteCardsToDeck,
  updateDeck,

};

async function getOneDeckByUserIdAndDeckId(req, res) {
  console.log('0--we pass through here, in the controllers')
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
  console.log('1--we pass through here, in the controllers')
  try {
      const decks = await Deck.find({ userId: req.user._id });
      res.json(decks);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
}

async function getOneDeckByUserId(req, res) {
  console.log('510 message')
  try {
    const deck = await Deck.findOne({
      _id: req.params.deckId,
      userId: req.params.userId
    });
    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }
    res.json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAllDecks(req, res) {
  console.log('3--we pass through here, in the controllers')
    try {    
        const decks = await Deck.find({});
        res.json({ decks });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}

async function createDeck(req, res) {
  console.log('4--we pass through here, in the controllers')
  console.log(req.user._id)
  const {title}  = req.body;
  const user_id = req.user._id;
  console.log(title)
    try {
        const createdDeck = await Deck.create({
            title: title,
            totalCards: 0,
            cards: [],
            userId: user_id,
        });
        console.log(createdDeck)
        const savedDeck = await createdDeck.save();
        console.log(savedDeck)
        res.status(201).json(createdDeck);
    } catch (err) {
    res.status(400).json(err);
    }
}

async function addCardsToDeck(req, res) {
  console.log('5--we pass through here, in the controllers')
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
  console.log('6--we pass through here, in the controllers')
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
  console.log('7--we pass through here, in the controllers');
  console.log(req.body)
  const {deckId} = req.body;
  try {
    const deck = await Deck.findOneAndDelete({ _id: deckId });
    console.log(deckId)
    console.log('Last before leaving')
    res.status(204).json();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateDeck(req, res) {
  console.log('we made it here but who knows: message')
  // console.log(req)
  // console.log(req.body)
  const { deckId, title } = req.body;
  //  console.log(deckId)
  //  console.log(title)
  try {
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


