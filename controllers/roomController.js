const db = require("../models/db");

exports.checkAvailability = (req, res) => {
  let { checkin, checkout, adults, children } = req.body;

  // 1️⃣  Basic date validation
  if (!checkin || !checkout || new Date(checkin) >= new Date(checkout)) {
    return res.status(400).json({ error: "Invalid check-in/out dates" });
  }

  // 2️⃣  Parse guest counts safely
  adults = parseInt(adults, 10);
  children = parseInt(children, 10);

  if (Number.isNaN(adults) || Number.isNaN(children)) {
    return res.status(400).json({ error: "Invalid guest numbers" });
  }

  const totalGuests = adults + children;

  const sql = `
    SELECT *
    FROM rooms r
    WHERE r.capacity >= ?
      AND r.status = 'available'
      AND r.id NOT IN (
        SELECT b.room_id
        FROM bookings b
        WHERE NOT (b.check_out <= ? OR b.check_in >= ?)
      )
  `;

  db.query(sql, [totalGuests, checkin, checkout], (err, rows) => {
    if (err) {
      console.error("Room query error:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    res.json({ availableRooms: rows });
  });
};
