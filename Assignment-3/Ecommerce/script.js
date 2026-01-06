// --- MOCK DATA ---
const products = [
    { id: 1, name: "Sony WH-1000XM5", price: 349, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Apple Watch Series 9", price: 399, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Nike Air Jordan 1", price: 180, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Fujifilm X-T5", price: 1699, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "MacBook Air M2", price: 1199, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Ray-Ban Aviator", price: 150, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80" }
];

// --- STATE MANAGEMENT ---
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const users = JSON.parse(localStorage.getItem('users')) || [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateNav();
    renderHome();
});

// --- NAVIGATION & UI UPDATES ---
function updateNav() {
    const authContainer = document.getElementById('auth-buttons');
    const cartBadge = document.getElementById('cart-badge');
    
    cartBadge.innerText = cart.length;

    if (currentUser) {
        authContainer.innerHTML = `
            <a href="#" onclick="renderProfile()"><i class="fas fa-user"></i> ${currentUser.name}</a>
            <a href="#" onclick="logout()" style="color: #ef4444;"><i class="fas fa-sign-out-alt"></i> Logout</a>
        `;
    } else {
        authContainer.innerHTML = `
            <a href="#" onclick="renderLogin()">Login</a>
            <a href="#" onclick="renderRegister()" class="btn-primary" style="padding: 5px 15px; border-radius: 20px; color: white;">Register</a>
        `;
    }
}

// --- VIEWS ---

function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2 style="margin-bottom: 20px;">Featured Products</h2>
        <div class="product-grid">
            ${products.map(product => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">$${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderCart() {
    const app = document.getElementById('app');
    if (cart.length === 0) {
        app.innerHTML = `<div style="text-align:center; padding: 50px;">
            <h2>Your Cart is Empty</h2>
            <p>Go add some cool stuff!</p>
            <button class="btn btn-primary" style="width:200px; margin: 20px auto;" onclick="renderHome()">Browse Shop</button>
        </div>`;
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    app.innerHTML = `
        <h2>Shopping Cart</h2>
        <div style="margin-top: 20px;">
            ${cart.map((item, index) => `
                <div class="cart-item">
                    <div style="display:flex; align-items:center; gap: 15px;">
                        <img src="${item.image}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
                        <div>
                            <h4>${item.name}</h4>
                            <p>$${item.price}</p>
                        </div>
                    </div>
                    <button class="btn btn-danger" style="width:auto;" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
        <div style="text-align:right; margin-top: 20px; border-top: 2px solid #ddd; padding-top: 20px;">
            <h3>Total: $${total}</h3>
            <button class="btn btn-primary" style="width:200px; margin-left:auto;" onclick="checkout()">Checkout Now</button>
        </div>
    `;
}

function renderLogin() {
    document.getElementById('app').innerHTML = `
        <div class="auth-container">
            <h2 style="text-align:center; margin-bottom: 20px;">Welcome Back</h2>
            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="login-pass" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <p style="text-align:center; margin-top:15px;">
                No account? <a href="#" onclick="renderRegister()">Register</a>
            </p>
        </div>
    `;
}

function renderRegister() {
    document.getElementById('app').innerHTML = `
        <div class="auth-container">
            <h2 style="text-align:center; margin-bottom: 20px;">Create Account</h2>
            <form onsubmit="handleRegister(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="reg-name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="reg-email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="reg-pass" required>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
            <p style="text-align:center; margin-top:15px;">
                Have an account? <a href="#" onclick="renderLogin()">Login</a>
            </p>
        </div>
    `;
}

function renderProfile() {
    if (!currentUser) return renderLogin();
    
    // Find fresh user data from the users array to get latest orders
    const userRecord = users.find(u => u.email === currentUser.email);
    const orders = userRecord.orders || [];

    document.getElementById('app').innerHTML = `
        <div class="profile-header">
            <h1>Hello, ${currentUser.name}!</h1>
            <p>${currentUser.email}</p>
        </div>
        <h3>Your Order History</h3>
        <div style="margin-top: 20px;">
            ${orders.length === 0 ? '<p>No orders yet.</p>' : orders.map(order => `
                <div class="order-item" style="flex-direction:column; align-items:flex-start;">
                    <div style="width:100%; display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong>Date: ${new Date(order.date).toLocaleDateString()}</strong>
                        <span style="color:green; font-weight:bold;">Total: $${order.total}</span>
                    </div>
                    <div style="width:100%;">
                        ${order.items.map(item => `
                            <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:5px;">
                                <span>${item.name}</span>
                                <span>$${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// --- LOGIC FUNCTIONS ---

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    saveData();
    updateNav();
    alert(`${product.name} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveData();
    updateNav();
    renderCart();
}

function checkout() {
    if (!currentUser) {
        alert("Please login to checkout!");
        renderLogin();
        return;
    }
    
    const order = {
        date: new Date().toISOString(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price, 0)
    };

    // Add order to the specific user in the users array
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        if (!users[userIndex].orders) users[userIndex].orders = [];
        users[userIndex].orders.unshift(order); // Add new order to top
        localStorage.setItem('users', JSON.stringify(users));
    }

    cart = [];
    saveData();
    updateNav();
    alert("Order placed successfully!");
    renderProfile();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if (users.find(u => u.email === email)) {
        alert("Email already registered!");
        return;
    }

    const newUser = { name, email, pass, orders: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! Please Login.");
    renderLogin();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    const user = users.find(u => u.email === email && u.pass === pass);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateNav();
        renderHome();
    } else {
        alert("Invalid email or password!");
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateNav();
    renderHome();
}

function saveData() {
    localStorage.setItem('cart', JSON.stringify(cart));
}