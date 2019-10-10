const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    name: String,
    staple: Boolean,
    quantity: {
        type: String,
        enum: ["Low", "Med", "High"]
    },
    location: {
        type: String,
        enum: ["Freezer", "Fridge", "Pantry"]
    }
}, {
    timestamps: true
});

// module.exports = mongoose.model('Grocery', grocerySchema);