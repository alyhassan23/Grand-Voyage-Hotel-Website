const db = require("../models/db");

exports.renderLogin = (req, res) => {
  res.render("admin_login", { error: null });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM admin_users WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, results) => {
    if (err) return res.render("admin_login", { error: "Server error" });

    if (results.length > 0) {
      res.redirect("/admin/admin_dash");
    } else {
      res.render("admin_login", { error: "Invalid credentials" });
    }
  });
};

exports.renderDashboard = (req, res) => {
  res.render("admin_dash");
};
