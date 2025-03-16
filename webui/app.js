const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js Web UI!');
});

app.get('/fetch-backend', async (req, res) => {
  try {
    const response = await axios.get('http://api-gateway:8080/api/data');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from backend');
  }
});

app.listen(port, () => {
  console.log(`Web UI running at http://localhost:${port}`);
});
