const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            default: ''
        }
    }]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
