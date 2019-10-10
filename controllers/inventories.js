// var Inventory = require('../models/inventory');
var User = require('../models/user');

module.exports = {
    create, 
    getAll, 
    delete: deleteOne,
    edit
}

async function edit(req, res){
    User.findById(req.body.user._id).then(user => {
        const userInv = user.inventory.id(req.body.id)
        const newInv = userInv.set(req.body.body)
        user.save();
        res.status(200).json(newInv);
    })
}

async function create(req, res) {
    try {
        User.findById(req.body.user._id).then(user => {
            user.inventory.push(req.body);
            user.save();
            res.status(200).json(user.inventory[user.inventory.length - 1]);
        })
    } catch (err) {
        res.json({err});
    }
}

async function getAll(req, res) {
    if (req.body.user === null) {
        res.status(200).json()
    } else {
        User.findById(req.body.user._id).then(user => {
            res.status(200).json(user.inventory)
        })
    }
}

async function deleteOne(req, res) {
    User.findById(req.body.user._id).then(user => {
        const userInv = user.inventory.id(req.body.id)
        userInv.remove(req.body.body)
        user.save();
        res.status(200).json(user.inventory)
    })
}