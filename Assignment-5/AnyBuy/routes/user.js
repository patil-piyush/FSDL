const express = require('express');
const { getHome, getCart, addToCart, getLanding } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getLanding);
router.get('/home', getHome);
router.get('/cart', getCart);
router.post('/cart', addToCart);

module.exports = router;