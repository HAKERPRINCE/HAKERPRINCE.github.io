const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

// Aapki nikali hui cookie
const ATERNOS_COOKIE = "ATERNOS_SESSION=ffdc8c4d-870e-46cc-a4f7-f95733f551c6";

app.post('/start', async (req, res) => {
  try {
    await axios.get('https://aternos.org/panel/ajax/start.php', {
      headers: {
        'Cookie': ATERNOS_COOKIE,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    res.json({ message: 'Success! Aternos server start ho raha hai.' });
  } catch (err) {
    res.status(500).json({ message: 'Aternos connect nahi ho paya. Cookie expire ho sakti hai.' });
  }
});

app.post('/stop', async (req, res) => {
  try {
    await axios.get('https://aternos.org/panel/ajax/stop.php', {
      headers: { 'Cookie': ATERNOS_COOKIE }
    });
    res.json({ message: 'Server stop kar diya gaya hai.' });
  } catch (err) {
    res.status(500).json({ message: 'Stop request fail ho gayi.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("HAKERPRINCE Backend is Live!"));

