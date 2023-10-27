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
  update(req, res) {
    const newProduct = {
      name_product: req.body.name_product,
      price: req.body.price,
    };
    const productId = req.params.id;
    const sql = "UPDATE products SET name_product = ?, price = ? WHERE id = ?";
    db.query(
      sql,
      [newProduct.name_product, newProduct.price, productId],
      (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Product updated!");
      }
    );
  },

  getAll(req, res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getAllProductsWithCategories(req, res) {
    const sql = `
      SELECT products.*, categories.name_category
      FROM products
      LEFT JOIN categories ON products.category_id = categories.id
    `;

    db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results);
    });
  },
};

module.exports = ProductController;
