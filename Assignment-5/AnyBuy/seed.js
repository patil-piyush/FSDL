const mongoose = require('mongoose');
const dotenv = require( 'dotenv');
const Product = require( './models/Product.js'); // Ensure path matches your structure

dotenv.config();

const adjectives = ["Vintage", "Modern", "Urban", "Classic", "Chic", "Boho", "Elegant", "Casual", "Luxury", "Streetwear"];
const types = ["Denim Jacket", "Summer Dress", "Cotton Tee", "Slim Fit Jeans", "Wool Coat", "Silk Scarf", "Leather Boots", "Running Shoes", "Hoodie", "Blazer"];
const categories = ["Men", "Women", "Accessories", "Unisex"];

const unsplashImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", // colorful dress
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500", // tee
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", // jacket
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500", // clothes rack
    "https://images.unsplash.com/photo-1550246140-29f40b909e5a?w=500", // hoodie
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500", // fashion model
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500", // shirt
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500"  // dark dress
];

const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 100; i++) {
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const image = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
        
        // Random price between 20 and 200
        const price = Math.floor(Math.random() * (200 - 20 + 1) + 20) + 0.99;

        products.push({
            name: `${adj} ${type}`,
            description: `This ${adj.toLowerCase()} ${type.toLowerCase()} is perfect for your ${category.toLowerCase()} collection. Crafted with high-quality materials.`,
            price: price,
            category: category,
            stock: Math.floor(Math.random() * 50) + 1,
            images: [{
                url: image,
                altText: `${adj} ${type}`
            }]
        });
    }
    return products;
};

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB...");

        // Clear existing products
        await Product.deleteMany({});
        console.log("Old products removed.");

        // Insert new products
        const sampleProducts = generateProducts();
        await Product.insertMany(sampleProducts);
        
        console.log("✅ 100 Products Added Successfully!");
        process.exit();
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDB();