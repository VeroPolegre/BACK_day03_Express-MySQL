const express = require("express");
const app = express();
const db = require("./config/database.js");
const PORT = 3000;

app.use(express.json());

app.use("/categories", require("./routes/categories.js"));
app.use("/products", require("./routes/products.js"));
app.use("/users", require("./routes/users.js"));
// app.use("/orders", require("./routes/orders.js"));

app.get("/createdb", (req, res) => {
  const sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/create_products_table", (req, res) => {
  const sql =
    "CREATE TABLE products(id INT AUTO_INCREMENT, name_product VARCHAR(250), price INT, PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Products table created...");
  });
});

app.get("/create_categories_table", (req, res) => {
  const sql =
    "CREATE TABLE categories(id INT AUTO_INCREMENT, name_category VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Categories table created...");
  });
});

app.get("/create_product_has_categories_table", (req, res) => {
  const sql = `
    CREATE TABLE product_has_categories (
      id INT AUTO_INCREMENT,
      product_id INT,
      category_id INT,
      PRIMARY KEY(id),
      FOREIGN KEY(product_id) REFERENCES expressDB.products(id),
      FOREIGN KEY(category_id) REFERENCES expressDB.categories(id)
    )`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product with categories table created...");
  });
});

app.get("/create_users_table", (req, res) => {
  const sql =
    "CREATE TABLE users(id INT AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Users table created...");
  });
});

app.get("/create_orders_table", (req, res) => {
  const sql =
    "CREATE TABLE orders(id INT AUTO_INCREMENT, date DATETIME, order_number INT, user_id INT, PRIMARY KEY(id), FOREIGN KEY(user_id) REFERENCES expressDB.users(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Orders table created...");
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
