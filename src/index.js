require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const intializedb = require('shared_library/init');

app.get('/', (req, res) => {
  res.send('Welcome to the Salon Staff App');
});

intializedb().then(() => {
  app.listen(port, () => {
    console.log(`Staff app running on port ${port}`);
  });
});
