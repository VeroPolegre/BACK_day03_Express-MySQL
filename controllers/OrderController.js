const db = require("../config/database.js");

const OrderController = {
  create(req, res) {
    const order = {
      date: req.body.date,
      order_number: req.body.order_number,
      user_id: req.body.user_id,
    };

    const sql = "INSERT INTO orders SET ?";
    db.query(sql, order, (err, result) => {
      if (err) {
        console.error("Error creating order:", err);
        res.status(500).send("Error creating order");
      } else {
        console.log(result);
        res.status(201).send("Order added!");
      }
    });
  },
  getAll(req, res) {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },
};
module.exports = OrderController;
