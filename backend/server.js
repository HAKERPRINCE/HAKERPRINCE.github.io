const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/start', async (req, res) => {
  try {
    // Yahan hum Aternos ko request bhejenge
    // Abhi ke liye hum success message bhej rahe hain taaki panel chale
    res.json({ message: 'Server Start command successfully sent to Aternos!' });
  } catch (err) {
    res.status(500).json({ message: 'Error connecting to Aternos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Live on port ${PORT}`));
