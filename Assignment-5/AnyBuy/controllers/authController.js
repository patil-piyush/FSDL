const bcrypt = require('bcryptjs');
const User = require('../models/User.js');

// Render Login Page
const getLoginPage = (req, res) => {
    res.render('login', { error: null });
};

// Render Register Page
const getRegisterPage = (req, res) => {
    res.render('register', { error: null });
};

// Handle Registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isEmailExist = await User.findOne({ email });
        if (isEmailExist) {
            return res.render('register', { error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.redirect('/auth/login');
    } catch (error) {
        console.error(error);
        res.render('register', { error: "Server error" });
    }
};

// Handle Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.render('login', { error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.render('login', { error: "Invalid email or password" });
        }

        // Set Session
        req.session.user = user;
        req.session.save(() => {
            res.redirect('/home');
        });

    } catch (error) {
        console.error(error);
        res.render('login', { error: "Server error" });
    }
};

// Handle Logout
const logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};


module.exports = {
    getLoginPage,
    getRegisterPage,
    registerUser,
    loginUser,
    logoutUser
};