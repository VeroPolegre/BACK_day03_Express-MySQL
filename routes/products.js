const express = require("express");
const ProductController = require("../controllers/ProductController.js");
const router = express.Router();

router.post("/products/create", ProductController.create);
router.put("/products/update", ProductController.update);
router.get("/products/all", ProductController.getAll);
router.get(
  "/products_with_categories",
  ProductController.getAllProductsWithCategories
);
router.get("/products/id/:id", ProductController.getById);
router.get("/products/descending", ProductController.getProductsDescending);
router.get("/products/name", ProductController.searchProductByName);
router.delete("/products/id/:id", ProductController.deleteProductById);

module.exports = router;
