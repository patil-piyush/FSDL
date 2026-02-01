const Product = require( '../models/Product.js');
const Cart = require( '../models/Cart.js');
const Order = require( '../models/Order.js');

// Render Landing Page
const getLanding = (req, res) => {
    res.render('landing');
};

// Render Home (Product Listing)
const getHome = async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('home', { products, user: req.session.user });
    } catch (error) {
        console.error(error);
        res.send("Error loading products");
    }
};

// Render Cart
const getCart = async (req, res) => {
    try {
        if (!req.session.user) return res.redirect('/auth/login');

        const cart = await Cart.findOne({ userId: req.session.user._id }).populate('items.productId');
        res.render('cart', { cart: cart || { items: [] }, user: req.session.user });
    } catch (error) {
        console.error(error);
        res.send("Error loading cart");
    }
};

// Add Item to Cart
const addToCart = async (req, res) => {
    try {
        if (!req.session.user) return res.redirect('/auth/login');

        const { productId } = req.body;
        let cart = await Cart.findOne({ userId: req.session.user._id });

        if (!cart) {
            cart = new Cart({ userId: req.session.user._id, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += 1;
        } else {
            cart.items.push({ productId, quantity: 1 });
        }

        await cart.save();
        res.redirect('/cart');
    } catch (error) {
        console.error(error);
        res.redirect('/home');
    }
};

const placeOrder = async (req,res) => {
    try {
        if(!req.session.user) return res.redirect(`/auth/login`);

        const { products, payment} = req.body;
        const userid = req.session.user._id;

        if(!products || !payment) return res.status(500).json({message: "There is no item in the cart!"});

        const newOrder = new Order({
            items: populate(products),
            payment,
            customerID: userid
        });

        const ordered = await Order.save(newOrder);
        if(ordered) return res.status(200).json({message: "Order placed successfully!"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error!", error});
    }
}

module.exports = {
    getLanding,
    getHome,
    getCart,
    addToCart,
    placeOrder
};