const db = require("../models/db");

exports.renderBlogs = (req, res) => {
  db.query("SELECT * FROM blogs", (err, results) => {
    if (err) throw err;
    res.render("blogs", { blogs: results });
  });
};

exports.renderNews = (req, res) => {
  db.query("SELECT * FROM news ORDER BY id DESC", (err, results) => {
    if (err) throw err;
    res.render("news", { newsItems: results });
  });
};
