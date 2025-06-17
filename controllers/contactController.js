const db = require("../models/db");

exports.submitContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  const query = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, email, subject, message], (err) => {
    if (err) return res.status(500).send("Server error");
    res.render("contact", { successMessage: "Message sent successfully!" });
  });
};
