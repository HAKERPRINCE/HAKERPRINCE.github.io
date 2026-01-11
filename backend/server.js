const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// JSON parse
app.use(express.json());

// Serve frontend (optional, if index.html same repo me hai)
app.use(express.static(path.join(__dirname, '..')));

// Free server endpoint
app.post('/create-free', (req, res) => {
  res.json({ message: 'Free server created! It will run limited time.' });
});

// Paid server endpoint
app.post('/buy-plan', (req, res) => {
  res.json({ message: 'Paid server activated! It will run 24/7.' });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
