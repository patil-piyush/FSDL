const mongoose = require("mongoose");
const Category = require("./Category");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;