const express = require("express");
const ProductController = require("../controllers/ProductController.js");
const router = express.Router();

router.post("/create", ProductController.create);
router.put("/update/:id", ProductController.update);
router.get("/", ProductController.getAll);
router.get(
  "/products_with_categories",
  ProductController.getAllProductsWithCategories
);
router.get("/id/:id", ProductController.getById);
router.get("/descending", ProductController.getProductsDescending);
router.get("/name/:name_product", ProductController.getProductByName);
router.delete("/id/:id", ProductController.deleteProductById);

module.exports = router;
