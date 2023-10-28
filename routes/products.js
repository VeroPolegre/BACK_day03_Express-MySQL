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
router.get("/products/name", ProductController.getProductByName);
router.delete("/products/id/:id", ProductController.deleteProductById);

module.exports = router;

// const routes = require("./products");

// const missingMethods = [];

// for (const route of routes.stack) {
//   const method = route.route.stack[0].method.toUpperCase();
//   const path = route.route.path;
//   const methodName = `${method}_${path.replace(/\//g, "_").replace(/:/g, "")}`;

//   if (
//     !ProductController[methodName] ||
//     typeof ProductController[methodName] !== "function"
//   ) {
//     missingMethods.push(`${method} ${path}`);
//   }
// }

// if (missingMethods.length === 0) {
//   console.log("Todos los métodos están definidos en ProductController.");
// } else {
//   console.log(
//     "Los siguientes métodos no están definidos en ProductController:"
//   );
//   missingMethods.forEach((route) => {
//     console.log(route);
//   });
// }
