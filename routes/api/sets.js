const express = require('express');
const router = express.Router();
const setsCtrl = require('../../controllers/api/sets');

router.get('/', setsCtrl.index);
router.get('/:id', setsCtrl.show);

module.exports = router;
