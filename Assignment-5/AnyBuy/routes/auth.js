const express = require( 'express');
const { registerUser, loginUser, getLoginPage, getRegisterPage, logoutUser } = require( '../controllers/authController.js');

const router = express.Router();

// GET pages
router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);
router.get('/logout', logoutUser);

// POST actions
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;