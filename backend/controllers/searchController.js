const axios = require('axios');

const searchWikipedia = async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`);
    return res.json(response.data.query.search);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Wikipedia' });
  }
};

module.exports = {
  searchWikipedia,
};