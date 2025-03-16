const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8080;

app.use('/api', createProxyMiddleware({
  target: 'http://backend:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  }
}));

app.listen(port, () => {
  console.log(`API Gateway running at http://localhost:${port}`);
});
