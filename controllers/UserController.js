const db = require("../config/database.js");

const UserController = {
  create(req, res) {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };
    const sql = "INSERT INTO users SET ?";
    db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(201).send("User added!");
    });
  },

  update(req, res) {
    const userId = req.params.id;
    const newFirstName = req.body.first_name;
    const newLastName = req.body.last_name;
    const newEmail = req.body.email;

    const sql =
      "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?";
    db.query(
      sql,
      [newFirstName, newLastName, newEmail, userId],
      (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send(`User ${newFirstName} updated!!`);
      }
    );
  },

  getAll(req, res) {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },

  getAllUsersWithOrders(req, res) {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },

  getById(req, res) {
    const sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  },

  deleteUserById(req, res) {
    const userId = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
      console.log(result);
      res.status(204).send(`User ${req.body.first_name} deleted!`);
    });
  },
};

module.exports = UserController;
