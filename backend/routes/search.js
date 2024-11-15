const express = require('express');
const { searchWikipedia } = require('../controllers/searchController');
const router = express.Router();

router.get('/', searchWikipedia);

module.exports = router;