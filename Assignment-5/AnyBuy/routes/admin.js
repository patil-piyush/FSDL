const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/adminController');

// Admin Dashboard
router.get('/dashboard',(req,res) => {
    res.render('admin/dashboard', { title: 'Admin Dashboard' });
})

router.get('/adminLogin', (req, res) => {
    res.render('admin/adminLogin', { title: 'Admin Login' });
});
router.post('/adminLogin', adminLoginPostController);
router.get('/adminLogout', adminLogoutController);

// User Management
router.get('/users', getAllUsersController);
router.get('/userDetails/:userId', getUserDetailsController);

// Product Management
router.get('/products', getAllProductsController);
router.get('/addProduct', getAddProductController);
router.post('/addProduct', postAddProductController);
router.get('/editProduct/:productId', getEditProductController);
router.post('/editProduct/:productId', postEditProductController);
router.post('/deleteProduct/:productId', deleteProductController);

// Order Management
router.get('/orders', getAllOrdersController);
router.get('/orderDetails/:orderId', getOrderDetailsController);
router.post('/updateOrderStatus/:orderId', updateOrderStatusController);

module.exports = router;