const Set = require('../../models/set');
const Card = require('../../models/card');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const sets = await Set.find({}).sort('name').exec();
  console.log('we are here sadly')
  res.json(sets);
}

async function show(req, res) {
  const set = await Set.findById(req.params.id);
  const cards = await Card.find(set.set_id);
  res.json(set, cards);
}
