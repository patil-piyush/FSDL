const express = require("express");
const getProducts = require("../controllers/controller");
const router = express.Router();

router.get("/products", getProducts);