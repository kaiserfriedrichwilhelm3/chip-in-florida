// server.js — Galen Demo
// Tiny Express server that serves demo.html (as index.html) on the Railway-assigned port.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Explicit routes for the demo at / and /demo (both work)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint (Railway uses this to confirm the service is alive)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'galen-demo' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Galen demo running on port ${PORT}`);
});
