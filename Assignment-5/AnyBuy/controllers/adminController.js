const User = require('../models/User');



const adminLoginPostController = async (req, res) => {
    const { username, password } = req.body;
    // Simple hardcoded authentication 
    if (username === 'admin' && password === 'password123') {
        req.session.admin = true;
        res.redirect('/admin/dashboard');
    } else {
        res.render('admin/adminLogin', { title: 'Admin Login', error: 'Invalid credentials' });
    }
}

const adminLogoutController = async (req, res) => {
    req.session.destroy();
    res.redirect('/admin/adminLogin');
}


const getAllUsersController = async (req, res) => {
    const users = []
    try {
        users = await User.find({});
        res.render('admin/userList', { title: 'User Management', users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
}


const getUserDetailsController = async (req, res) => {
    const users = []
    try {
        users = await User.find({});
        res.render('admin/userList', { title: 'User Management', users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
}

const getAllProductsController = async (req, res) => {
    const products = []
    try {
        products = await Product.find({});
        res.render('admin/productList', { title: 'Product Management', products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
}
const getAddProductController = async (req, res) => {
    res.render('admin/addProduct', { title: 'Add Product' });
}
const postAddProductController = async (req, res) => {
    const { name, description, price, stock } = req.body;
    try {
        const newProduct = new Product({ name, description, price, stock });
        await newProduct.save();
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).send('Internal Server Error');
    }
}
const getEditProductController = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('admin/editProduct', { title: 'Edit Product', product });
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send('Internal Server Error');
    }
}
const postEditProductController = async (req, res) => {
    const { productId } = req.params;
    const { name, description, price, stock } = req.body;
    try {
        await Product.findByIdAndUpdate(productId, { name, description, price, stock });
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Internal Server Error');
    }
}
const deleteProductController = async (req, res) => {
    const { productId } = req.params;
    try {
        await Product.findByIdAndDelete(productId);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Internal Server Error');
    }
}
const getAllOrdersController = async (req, res) => {
    const orders = []
    try {
        orders = await Order.find({}).populate('user').populate('products.product');
        res.render('admin/orderList', { title: 'Order Management', orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).send('Internal Server Error');
    }
}
const getOrderDetailsController = async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await Order.findById(orderId).populate('user').populate('products.product');
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.render('admin/orderDetails', { title: 'Order Details', order });
    } catch (error) {
        console.error('Error fetching order details:', error);
        res.status(500).send('Internal Server Error');
    }
}
const updateOrderStatusController = async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;
    try {
        await Order.findByIdAndUpdate(orderId, { status });
        res.redirect('/admin/orders');
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).send('Internal Server Error');
    }
}

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