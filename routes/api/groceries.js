const express = require('express');
const router = express.Router();
const inventoriesCrl = require('../../controllers/inventories');

router.get('/', inventoriesCrl.index);
router.post('/', inventoriesCrl.create);
router.delete('/', inventoriesCrl.delete);

module.exports = router;