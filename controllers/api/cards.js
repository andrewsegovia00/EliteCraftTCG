const Set = require('../../models/set');
const Card = require('../../models/card');

module.exports = {
  getBySetId
};

async function getBySetId(req, res) {
  try {
    const set = await Set.findById(req.params.setId);
    if (!set) {
      return res.status(404).json({ message: 'Set not found' });
    }

    const cards = await Card.find({ set_id: set.set_id }); // Find cards with matching set_id
    res.json({ set, cards });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
