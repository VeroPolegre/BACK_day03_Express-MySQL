const express = require("express");
const UserController = require("../controllers/UserController.js");
const router = express.Router();

router.post("/create", UserController.create);
router.put("/update/:id", UserController.update);
router.get("/", UserController.getAll);
// router.get("/users_with_orders", UserController.getAllUsersWithOrders);
router.get("/id/:id", UserController.getById);
router.delete("/id/:id", UserController.deleteUserById);
module.exports = router;
