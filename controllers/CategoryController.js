const db = require("../config/database.js");

const CategoryController = {
  create(req, res) {
    let category = {
      name_category: req.body.name_category,
      description: req.body.description,
    };
    let sql = "INSERT INTO categories SET ?";
    db.query(sql, category, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(201).send("Category added!");
    });
  },

  update(req, res) {
    const categoryId = req.params.id;
    const newName = req.body.name_category;
    const newDescription = req.body.description;

    let sql =
      "UPDATE categories SET name_category = ?, description = ? WHERE id = ?";
    db.query(sql, [newName, newDescription, categoryId], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200).send(`Category ${newName} updated!!`);
    });
  },

  getAll(req, res) {
    let sql = "SELECT * FROM categories";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },

  getById(req, res) {
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },
};

module.exports = CategoryController;
