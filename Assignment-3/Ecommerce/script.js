// --- CONFIG & UTILS ---
const PRODUCTS = [
    { id: 1, name: "Velvet Lounge Chair", price: 299, img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500" },
    { id: 2, name: "Golden Analog Watch", price: 150, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
    { id: 3, name: "Minimalist Lamp", price: 89, img: "https://images.unsplash.com/photo-1507473888900-52e1ad14592d?w=500" },
    { id: 4, name: "Leather Travel Bag", price: 210, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { id: 5, name: "Designer Sunglasses", price: 120, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
    { id: 6, name: "Ceramic Vase Set", price: 65, img: "https://images.unsplash.com/photo-1581783342308-f792ca11df53?w=500" },
];

// Initialize State
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];

// Run on every page load
document.addEventListener('DOMContentLoaded', () => {
    updateNavUI();
    
    // Page Specific Logic triggers
    if(document.getElementById('product-list')) renderProducts();
    if(document.getElementById('cart-items')) renderCartPage();
    if(document.getElementById('profile-content')) renderProfilePage();
});

// --- NAVIGATION UI ---
function updateNavUI() {
    const navAuth = document.getElementById('nav-auth');
    const cartCount = document.getElementById('cart-count');
    
    // Update Cart Badge
    if(cartCount) cartCount.innerText = cart.length;

    // Update Auth Links
    if (currentUser) {
        navAuth.innerHTML = `
            <a href="profile.html"><i class="fas fa-user"></i> ${currentUser.name.split(' ')[0]}</a>
            <a href="#" onclick="logout()" style="color:var(--primary)">Logout</a>
        `;
    } else {
        navAuth.innerHTML = `<a href="login.html">Login</a>`;
    }
}

// --- AUTH FUNCTIONS ---
function registerUser(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if(users.some(u => u.email === email)) {
        alert("User already exists!");
        return;
    }

    const newUser = { name, email, pass, orders: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Account created! Please login.");
    window.location.href = 'login.html';
}

function loginUser(e) {
    e.preventDefault();
    const email = document.getElementById('log-email').value;
    const pass = document.getElementById('log-pass').value;
    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert("Invalid credentials!");
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// --- SHOPPING LOGIC ---
function renderProducts() {
    const grid = document.getElementById('product-list');
    grid.innerHTML = PRODUCTS.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <div class="card-body">
                <h3 class="card-title">${p.name}</h3>
                <span class="card-price">$${p.price}</span>
                <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateNavUI();
    // Simple toast notification
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Added ✓";
    btn.style.background = "#d4af37";
    setTimeout(() => { btn.innerText = originalText; btn.style.background = ""; }, 1000);
}

// --- CART PAGE LOGIC ---
function renderCartPage() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    
    if(cart.length === 0) {
        container.innerHTML = `<tr><td colspan="4" style="text-align:center;">Your cart is empty.</td></tr>`;
        totalEl.innerText = "0";
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
        <tr>
            <td><img src="${item.img}" class="cart-img"></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td><button class="btn-outline" style="padding:5px 10px; border:1px solid red; color:red;" onclick="removeFromCart(${index})">&times;</button></td>
        </tr>`;
    }).join('');
    
    totalEl.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartPage();
    updateNavUI();
}

function checkout() {
    if(!currentUser) {
        alert("Please login to checkout");
        window.location.href = 'login.html';
        return;
    }
    if(cart.length === 0) return alert("Cart is empty");

    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        total: cart.reduce((sum, i) => sum + i.price, 0),
        items: [...cart]
    };

    // Save order to user history
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    users[userIndex].orders.unshift(order);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert("Order Placed Successfully!");
    window.location.href = 'profile.html';
}

// --- PROFILE LOGIC ---
function renderProfilePage() {
    if(!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Refresh user data from DB to get latest orders
    const userRecord = users.find(u => u.email === currentUser.email);
    
    document.getElementById('user-name').innerText = userRecord.name;
    document.getElementById('user-email').innerText = userRecord.email;
    
    const ordersContainer = document.getElementById('order-history');
    if(userRecord.orders.length === 0) {
        ordersContainer.innerHTML = "<p>No orders yet.</p>";
        return;
    }

    ordersContainer.innerHTML = userRecord.orders.map(order => `
        <div class="order-card">
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <strong>Order #${order.id}</strong>
                <span style="color:green">$${order.total}</span>
            </div>
            <p style="font-size:0.85rem; color:#666;">${order.date}</p>
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid #eee;">
                ${order.items.map(i => `<span style="margin-right:10px; font-size:0.8rem; background:#eee; padding:2px 8px; border-radius:4px;">${i.name}</span>`).join('')}
            </div>
        </div>
    `).join('');
}