const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/products", ProductController.create);
router.put("/products", ProductController.update);
router.get("/", ProductController.getAll);
router.get(
  "/products-with-categories",
  ProductController.getAllProductsWithCategories
);

module.exports = router;
