const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
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
