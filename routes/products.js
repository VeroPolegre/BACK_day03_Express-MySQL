const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/products", ProductController.create);

module.exports = router;
