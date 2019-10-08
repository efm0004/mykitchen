var Grocery = require('../models/grocery');

module.exports = {
    create, 
    index, 
    delete: deleteOne
}

async function create(req, res) {
    try {
        await Grocery.create(req.body);
    } catch (err) {
        res.json({err});
    }
}

async function index(req, res) {
    //write function that will list all items in Grocery model
}

async function deleteOne(req, res) {
    //write function that will delete items in Grocery
}