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
      res.status(201).send("Product added!");
    });
  },
  update(req, res) {
    let productId = req.params.id;
    let newProduct = {
      name_product: req.body.name_product,
      price: req.body.price,
    };
    let sql = "UPDATE products SET ? WHERE id = ?";
    db.query(sql, [newProduct, productId], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200).send("Product updated!");
    });
  },

  getAll(req, res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getAllProductsWithCategories(req, res) {
    let sql = `
      SELECT products.*, categories.name_category
      FROM products
      LEFT JOIN categories ON products.category_id = categories.id
    `;

    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  getById(req, res) {
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getProductsDescending(req, res) {
    let sql = "SELECT * FROM products ORDER BY id DESC";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  searchProductByName(req, res) {
    const sql = "SELECT * FROM products WHERE name_product LIKE ?";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  deleteProductById(req, res) {
    const productId = req.params.id;
    const sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [productId], (err, result) => {
      console.log(result);
      res.send("Product deleted!");
    });
  },
};

module.exports = ProductController;
