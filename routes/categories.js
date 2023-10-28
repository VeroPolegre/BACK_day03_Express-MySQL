const express = require("express");
const CategoryController = require("../controllers/CategoryController.js");
const router = express.Router();

router.post("/create", CategoryController.create);
router.put("/update/:id", CategoryController.update);
router.get("/", CategoryController.getAll);
router.get("/id/:id", CategoryController.getById);

module.exports = router;
