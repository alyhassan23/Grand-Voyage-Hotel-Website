const mysql = require("mysql2");
var env = require("env");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST_ID,
  user: process.env.USER_ID,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL Database");
});

module.exports = db;
