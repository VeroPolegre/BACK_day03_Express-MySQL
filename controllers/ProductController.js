const db = require("../config/database.js");

const ProductController = {
  create(req, res) {
    let product = {
      name_product: req.body.name_product,
      price: req.body.price,
    };
    let sql = "INSERT INTO products SET ?";
    db.query(sql, product, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Product added!");
    });
  },
};

module.exports = ProductController;
