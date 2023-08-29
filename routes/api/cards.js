const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');

router.get('/', cardsCtrl.getAll);
router.get('/:setId', cardsCtrl.getBySetId);

module.exports = router;


