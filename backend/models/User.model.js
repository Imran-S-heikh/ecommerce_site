const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    role: {
        type: [String],
        default: 'user',
        enum: ['user','admin','moderator']
    },
    email: {
        type: String,
        required: [true,'User must have a Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'Please provide a strong Password'],
        minlength: 8,
        select: false
    },
    purchased: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }],
    wishlist: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }],
    totalTransaction: Number,
    transaction: Number
});


const User = mongoose.model('User',userSchema);

module.exports = User;