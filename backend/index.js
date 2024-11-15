const express = require('express');
const axios = require('axios');
const mysql = require('mysql2');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'legal_ease'
});

app.get('/api/search', async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.post('/api/history', (req, res) => {
  const { searchQuery } = req.body;
    connection.query('INSERT INTO search_history (query) VALUES (?)', [searchQuery], (err, results) => {
      if (err) {
        return res.status(500).send('Error saving search history');
      }
      res.status(200).send('Search history saved');
    });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
