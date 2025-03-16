const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8080;

// Add a root route handler
app.get('/', (req, res) => {
  res.send(`
    <h1>API Gateway</h1>
    <p>This is the API Gateway service. Available endpoints:</p>
    <ul>
      <li><a href="/api/data">/api/data</a> - Get data from the backend service</li>
    </ul>
  `);
});

app.use('/api', createProxyMiddleware({
  target: 'http://backend:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.listen(port, () => {
  console.log(`API Gateway running at http://localhost:${port}`);
});
