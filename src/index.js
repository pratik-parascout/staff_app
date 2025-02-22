require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the Salon Staff App');
});

app.listen(port, () => {
  console.log(`Staff app running on port ${port}`);
});
