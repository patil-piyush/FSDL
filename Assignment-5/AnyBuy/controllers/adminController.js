const User = require(`../models/User`);
const Cart = require(`../models/Cart`);
const Product = require(`../models/Product`);

module.exports = {
    adminLoginPostController,
    adminLogoutController,
    getAllUsersController,
    getUserDetailsController,
    getAllProductsController,
    getAddProductController,
    postAddProductController,
    getEditProductController,
    postEditProductController,
    deleteProductController,
    getAllOrdersController,
    getOrderDetailsController,
    updateOrderStatusController
};