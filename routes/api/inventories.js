const express = require('express');
const router = express.Router();
const inventoriesCrl = require('../../controllers/inventories');

router.post('/all', inventoriesCrl.getAll);
router.post('/add', inventoriesCrl.create);
router.put('/edit/:id', inventoriesCrl.edit);
router.delete('/:id', inventoriesCrl.delete);


module.exports = router;