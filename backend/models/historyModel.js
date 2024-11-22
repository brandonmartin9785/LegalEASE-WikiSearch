const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const saveSearchQuery = (query, callback) => {
  const sql = 'INSERT INTO search_history (query) VALUES (?)';
  db.query(sql, [query], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return callback(err);
    }
    console.log('Query executed successfully:', result);
    callback(null, result);
  });
};

module.exports = {
  saveSearchQuery,
};