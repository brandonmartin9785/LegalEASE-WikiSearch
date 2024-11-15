const { saveSearchQuery } = require('../models/historyModel');

const saveHistory = (req, res) => {
  const { query } = req.body;
  saveSearchQuery(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Search history saved' });
  });
};

module.exports = {
  saveHistory,
};