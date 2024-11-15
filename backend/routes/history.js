const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

router.post('/', (req, res) => {
  const { query } = req.body;
  const sql = 'INSERT INTO search_history (query) VALUES (?)';
  db.query(sql, [query], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Search history saved' });
  });
});

module.exports = router;