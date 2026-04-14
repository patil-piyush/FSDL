// NoSQL Schema for E-Commerce: Design a MongoDB
// schema for "Product" and "Category" and implement a GET
// route to fetch all items.


const express = require("express");
const dbconnect = require("./config/db");

dbconnect("mongodb://localhost:27017/data");

const server = express();

server.listen(3000, () => console.log("Server running on 3000"));