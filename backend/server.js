const express = require('express');
const cors = require('cors'); // CORS install karna zaroori hai: npm install cors
const app = express();

app.use(cors()); // Iske bina GitHub Pages se request block ho jayegi
app.use(express.json());

app.post('/start', (req, res) => {
  console.log(`Starting server: ${req.body.serverName}`);
  res.json({ message: 'Server is starting...' });
});

app.post('/stop', (req, res) => {
  console.log(`Stopping server: ${req.body.serverName}`);
  res.json({ message: 'Server has been stopped.' });
});

app.post('/restart', (req, res) => {
  res.json({ message: 'Server is restarting...' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
