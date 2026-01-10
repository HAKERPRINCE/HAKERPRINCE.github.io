const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// JSON parse
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '..')));

// Free server
app.post('/create-free', (req, res) => {
  // Free server 24/7 nahi chalega
  res.json({ message: 'Free server created! It will run limited time.' });
});

// Paid server
app.post('/buy-plan', (req, res) => {
  // Paid server 24/7 chalega
  res.json({ message: 'Paid server activated! It will run 24/7.' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
