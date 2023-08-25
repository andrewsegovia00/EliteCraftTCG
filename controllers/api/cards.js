const Set = require('../../models/set');
const Card = require('../../models/card');

module.exports = {
  getBySetId,
  getAll,
};

async function getBySetId(req, res) {
  try {
    const set = await Set.findById(req.params.setId);
    if (!set) {
      return res.status(404).json({ message: 'Set not found' });
    }

    const cards = await Card.find({ set: set.name }); 
    res.json({ set, cards });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAll(req, res) {
    try {    
        const cards = await Card.find({});
        res.json({ cards });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}

