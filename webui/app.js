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
    // In production, this would be a relative URL to the same origin
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? '/api/data'  // When accessed through API gateway
      : 'http://api-gateway:8080/api/data';  // Direct container communication
      
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from backend:', error.message);
    res.status(500).send('Error fetching data from backend');
  }
});

app.listen(port, () => {
  console.log(`Web UI running at http://localhost:${port}`);
});
