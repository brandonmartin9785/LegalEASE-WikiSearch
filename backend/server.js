const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const searchRoutes = require('./routes/search');
const historyRoutes = require('./routes/history');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/api/search', searchRoutes);
app.use('/api/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});