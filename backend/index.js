const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/api/search', async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
