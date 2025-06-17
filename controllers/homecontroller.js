exports.renderHome = (req, res) => {
  res.render("index");
};

exports.renderAbout = async (req, res) => {
  const db = require("../models/db");
  const [team] = await db.promise().query("SELECT * FROM team");
  const [testimonials] = await db.promise().query("SELECT * FROM testimonials");
  res.render("about", { team, testimonials });
};

exports.renderContact = (req, res) => {
  res.render("contact", { successMessage: null });
};

exports.renderFeedback = (req, res) => {
  res.render("feedback");
};
