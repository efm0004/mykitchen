var Inventory = require('../models/inventory');

module.exports = {
    create, 
    getAll, 
    delete: deleteOne
}

async function create(req, res) {
    console.log(req.body);
    try {
        await Inventory.create(req.body);
    } catch (err) {
        res.json({err});
    }
}

async function getAll(req, res) {
    //write function that will list all items in Inventory model
    Inventory.find({}).then(inventories => {
        res.status(200).json(inventories);
    }).catch(error => res.status(500).json())
}

async function deleteOne(req, res) {
    //write function that will delete items in Invetory
}