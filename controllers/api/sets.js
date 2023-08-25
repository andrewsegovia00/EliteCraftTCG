// const Set = require('../../models/set');

// module.exports = {
//   index,
//   show
// };

// async function index(req, res) {
//   const items = await Set.find({}).sort('name').populate('category').exec();
//   // re-sort based upon the sortOrder of the populated categories
//   items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//   res.json(items);
// }

// async function show(req, res) {
//   const item = await Item.findById(req.params.id);
//   res.json(item);
// }
