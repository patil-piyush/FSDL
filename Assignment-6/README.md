# Assignment 6 – 3Cols (Code Snippet Manager)

## Objective

Develop a **full-stack code snippet management platform** where developers can securely store, organize, search, and share code snippets. The application includes user authentication, public profiles, syntax highlighting, bookmarking, likes, dashboards, and full-text search.

---

## Directory Structure

```text
Assignment-6/
└── 3Cols/
    ├── api/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── public/
    ├── routes/
    ├── utils/
    ├── views/
    ├── server.js
    ├── package.json
    └── vercel.json
```

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Secure HTTP-only Cookies
* Password Hashing using BCrypt
* Logout functionality

### Snippet Management

* Create code snippets
* Edit snippets
* Delete snippets
* View snippets
* Public snippet sharing
* Private snippets
* Syntax highlighting
* Language selection
* Tags support

### Search & Organization

* Full-text search
* Filter snippets
* Browse public snippets
* Tag-based organization
* Language categorization

### Social Features

* Like snippets
* Bookmark snippets
* Public developer profiles
* View user snippets
* Dashboard statistics

### Dashboard

* Total snippets
* Total likes
* Total views
* Bookmarked snippets
* Recent snippets

### User Experience

* Responsive UI
* Dark / Light theme
* Flash notifications
* Copy-to-clipboard
* Animated interface
* Smooth page transitions
* Mobile-friendly design

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* Highlight.js
* AOS Animation Library
* Select2
* Font Awesome

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT
* BCryptJS
* Helmet
* Express Session
* Cookie Parser
* Express Validator
* Express Rate Limit

### Utilities

* Compression
* Morgan
* Connect Flash
* Express EJS Layouts

### Deployment

* Vercel

---

## Project Structure

### Configuration

* MongoDB connection
* Environment variables

### Models

* User
* Snippet

### Controllers

* Authentication Controller
* Snippet Controller
* Profile Controller

### Middleware

* JWT Authentication
* Route Protection
* User Loader

### Routes

* Authentication Routes
* Snippet Routes
* Profile Routes
* View Routes

### Views

* Landing Page
* Dashboard
* Login
* Register
* Profile
* Snippet List
* Snippet Details
* Create/Edit Snippet
* Error Pages

---

## Major Functionalities

* Secure authentication using JWT
* Create, edit, and delete snippets
* Browse public snippets
* Search snippets using MongoDB text indexing
* Bookmark favorite snippets
* Like snippets
* Personal dashboard
* Public user profiles
* Copy code with one click
* Syntax highlighting for multiple programming languages
* Responsive dark/light interface

---

## Learning Outcomes

After completing this assignment, you will understand:

* MVC Architecture
* Express.js application structure
* MongoDB with Mongoose
* JWT Authentication
* Password hashing
* Middleware implementation
* Route protection
* Full-text search in MongoDB
* Server-side rendering with EJS
* Flash messaging
* Secure cookie handling
* Input validation
* Responsive UI development
* Deployment-ready Express applications

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd Assignment-6/3Cols
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
SESSION_SECRET=your_session_secret
NODE_ENV=development
```

### Start the development server

```bash
npm run dev
```

Or run the production server

```bash
npm start
```

---

## Application Workflow

1. Register a new account.
2. Log in securely.
3. Create new code snippets.
4. Organize snippets using tags and languages.
5. Search snippets instantly.
6. View public snippets from other users.
7. Like and bookmark useful snippets.
8. Manage snippets through the dashboard.
9. Visit public developer profiles.

---

## Security Features

* JWT-based Authentication
* Password Encryption using BCrypt
* Secure HTTP-only Cookies
* Input Validation
* Rate Limiting
* Helmet Security Headers
* Protected Routes
* Error Handling Middleware

---

## Project Highlights

* Full-Stack MERN-style Architecture
* Secure Authentication
* Code Snippet Management
* Public Profiles
* Search Functionality
* Bookmark & Like System
* Dashboard Analytics
* Syntax Highlighting
* Dark/Light Theme
* Responsive Design
* Vercel Deployment Ready

---

## Author

**Piyush Patil**
