const db = require("../models/db");

exports.submitFeedback = (req, res) => {
  const {
    fullName,
    email,
    phone,
    checkIn,
    roomType,
    experience,
    serviceQuality,
    comments,
    subscribe,
  } = req.body;

  const query = `
    INSERT INTO feedbacks 
    (full_name, email, phone, check_in, room_type, experience, service_quality, comments, subscribe)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      fullName,
      email,
      phone,
      checkIn,
      roomType,
      experience,
      serviceQuality,
      comments,
      subscribe ? 1 : 0,
    ],
    (err) => {
      if (err) return res.status(500).json({ success: false });
      res.json({ success: true });
    }
  );
};
