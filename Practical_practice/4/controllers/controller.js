const Products = require("../models/Product");


const getProducts = (req, res) => {
    try {
        const products = Products.find({});
        res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error!" });
    }
}

module.exports = getProducts;