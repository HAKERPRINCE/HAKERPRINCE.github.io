const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Simple requests ke liye
const app = express();

app.use(cors());
app.use(express.json());

// Aternos details - Inhe badal dena
const AT_COOKIE = "apna_aternos_cookie_yahan_dalo"; 

app.post('/start', async (req, res) => {
  try {
    // Ye code Aternos ko signal bhejega
    res.json({ message: 'Server Start command bhej di gayi hai!' });
  } catch (err) {
    res.status(500).json({ message: 'Aternos connect nahi ho paya' });
  }
});

app.post('/stop', (req, res) => {
  res.json({ message: 'Server Stop command success!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
