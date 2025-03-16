const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 8080;

// Proxy API requests to the backend
app.use('/api', createProxyMiddleware({
  target: 'http://backend:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

// Proxy requests for the web UI
app.use('/', createProxyMiddleware({
  target: 'http://webui:3000',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`API Gateway running at http://localhost:${port}`);
});
