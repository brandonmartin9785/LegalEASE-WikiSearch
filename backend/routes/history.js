const express = require('express');
const { saveHistory } = require('../controllers/historyController');
const router = express.Router();

router.post('/', saveHistory);

module.exports = router;