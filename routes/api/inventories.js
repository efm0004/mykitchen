const express = require('express');
const router = express.Router();
const inventoriesCrl = require('../../controllers/inventories');

router.get('/', inventoriesCrl.getAll);
router.post('/', inventoriesCrl.create);
router.delete('/:id', inventoriesCrl.delete);


module.exports = router;