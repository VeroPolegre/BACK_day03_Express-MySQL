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
    const productId = req.params.id;
    const newName = req.body.name_product;
    const newPrice = req.body.price;

    let sql = "UPDATE products SET name_product = ?, price = ? WHERE id = ?";
    db.query(sql, [newName, newPrice, productId], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200).send(`Product ${newName} updated!!`);
    });
  },

  getAll(req, res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },

  getAllProductsWithCategories(req, res) {
    let sql = `
    SELECT products.name_product, categories.name_category
    FROM products
    INNER JOIN product_has_categories ON products.id = product_has_categories.product_id
    INNER JOIN categories ON product_has_categories.category_id = categories.id`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200).send(result);
    });
  },

  getById(req, res) {
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },

  getProductsDescending(req, res) {
    let sql = "SELECT * FROM products ORDER BY id DESC";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200).send(result);
    });
  },

  getProductByName(req, res) {
    const nameProduct = req.params.name_product;
    const sql = `SELECT * FROM products WHERE name_product = ?`;
    db.query(sql, [nameProduct], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200).send(result);
    });
  },

  deleteProductById(req, res) {
    const productId = req.params.id;
    const sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [productId], (err, result) => {
      console.log(result);
      res.status(204).send(`Product ${req.body.name_product} deleted!`);
    });
  },
};

module.exports = ProductController;
