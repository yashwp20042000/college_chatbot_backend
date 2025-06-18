
// server.js or app.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// ✅ CORS Setup
app.use(cors({
  origin: 'http://localhost:5173/', // Frontend URL (Vite port)
  credentials: true
}));

// ✅ JSON Middleware
app.use(express.json());

// ✅ Test Endpoint
app.get('/api/test', (req, res) => {
  res.json({ status: 'Backend connected successfully!' });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
