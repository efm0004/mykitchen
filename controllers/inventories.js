// var Inventory = require('../models/inventory');
var User = require('../models/user');

module.exports = {
    create, 
    getAll, 
    delete: deleteOne,
    edit
}

async function edit(req, res){
    console.log(req.body.body)
    User.findById(req.body.user._id).then(user => {
        console.log('hello')
        const userInv = user.inventory.id(req.body.id)
        console.log('hello2')
        const newInv = userInv.set(req.body.body)
        console.log('hello3')
        user.save();
        console.log('hello4')
        res.status(200).json(newInv);
    })
    // Inventory.findByIdAndUpdate(req.params.id, req.body, {new:true})
    // .then(inventory => {
    //     res.status(200).json(inventory)
    // }). catch(error => res.status(500).json())
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
    //write function that will list all items in Inventory model
    // User.findById()
    console.log('hit');
    if (req.body.user === null) {
        res.status(200).json('Please login to see your kitchen')
    } else {
        User.findById(req.body.user._id).then(user => {
            console.log('hit2')
            res.status(200).json(user.inventory)
        })
    }
}

async function deleteOne(req, res) {
    //write function that will delete items in Inventory
    console.log(req.params.id);
    Inventory.findByIdAndRemove(req.body.id).then(inventory => {
        console.log(inventory)
        res.status(200).json(inventory);
    }).catch(error => res.status(500).json())
}