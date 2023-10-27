const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3000;

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/create_products_table", (req, res) => {
  let sql =
    "CREATE TABLE products(id INT AUTO_INCREMENT, name_product VARCHAR(255), price INT, PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Products table created...");
  });
});

app.get("/create_categories_table", (req, res) => {
  let sql =
    "CREATE TABLE categories(id INT AUTO_INCREMENT, name_category VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Categories table created...");
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
