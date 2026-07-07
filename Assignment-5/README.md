# Assignment 5 – AnyBuy E-Commerce Application

## Objective

To develop a **full-stack e-commerce web application** using **Node.js, Express.js, MongoDB, EJS, and Express Session** with secure user authentication, product management, shopping cart functionality, and order processing.

---

## Directory Structure

```text id="hynm32"
Assignment-5/
└── AnyBuy/
    ├── index.js
    ├── package.json
    ├── seed.js
    ├── config/
    ├── controllers/
    ├── models/
    ├── public/
    ├── routes/
    └── views/
```

---

## Features

### User Authentication

* User Registration
* User Login
* Password Hashing using BCrypt
* Session-based Authentication
* Secure Logout

### Product Management

* Display product catalog
* Product categories
* Product details
* Product images
* Product stock management
* Database seeding with sample products

### Shopping Cart

* Add products to cart
* Quantity management
* Dynamic cart total
* Order summary
* Checkout page

### Orders

* Place orders
* Order creation
* Cart clearing after checkout
* Order history storage

### User Experience

* Responsive UI
* Landing page
* Product filtering by category
* Fashion-inspired interface
* Animated product cards
* Bootstrap-based design

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* EJS
* JavaScript
* Font Awesome
* Bootstrap Icons
* AOS (Animate On Scroll)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Express Session
* BCrypt

### Environment

* Dotenv

---

## Project Structure

### Configuration

* Database connection
* Environment variables

### Models

* User
* Product
* Cart
* Order

### Controllers

* Authentication Controller
* User Controller

### Routes

* Authentication Routes
* User Routes
* Admin Routes

### Views

* Landing Page
* Home Page
* Login
* Register
* Shopping Cart

---

## Key Functionalities

* User registration and login
* Session management
* Secure password hashing
* Product browsing
* Add to cart
* Cart management
* Checkout process
* Order placement
* MongoDB integration
* Dynamic EJS rendering

---

## Learning Outcomes

After completing this assignment, you will understand:

* Building full-stack web applications
* MVC architecture
* MongoDB database integration
* Express routing
* User authentication
* Password hashing using BCrypt
* Session management
* CRUD operations
* Dynamic server-side rendering using EJS
* RESTful application development

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd Assignment-5/AnyBuy
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root and add:

```env
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=5000
```

### Seed the database

```bash
node seed.js
```

### Start the development server

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

---

## Project Workflow

1. Register a new account.
2. Login securely.
3. Browse available products.
4. Add products to the shopping cart.
5. Review the cart.
6. Proceed to checkout.
7. Place the order.
8. Continue shopping.

---

## Key Features Summary

* Full-Stack E-Commerce Application
* Express.js Backend
* MongoDB Database
* EJS Templating
* User Authentication
* Password Encryption
* Session Management
* Shopping Cart
* Order Processing
* Product Database
* Responsive Bootstrap UI
* MVC Architecture

---

## Author

**Piyush Patil**
