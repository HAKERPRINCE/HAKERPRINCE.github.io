const express = require('express');
const cors = require('cors');
const aternos = require('aternos-api'); // Aternos wrapper
const app = express();

app.use(cors());
app.use(express.json());

// Aternos Login Details (Apna Aternos username/password yahan dalein)
const AT_USER = "APNA_USERNAME";
const AT_PASS = "APNA_PASSWORD";

app.post('/start', async (req, res) => {
  try {
    const at = new aternos.Aternos(AT_USER, AT_PASS);
    await at.login();
    const servers = await at.getServers();
    const myServer = servers[0]; // Pehla server select karega
    await myServer.start();
    res.json({ message: 'Aternos Server Start ho raha hai!' });
  } catch (error) {
    res.status(500).json({ message: 'Aternos Login Failed!', error: error.message });
  }
});

app.post('/stop', async (req, res) => {
  try {
    const at = new aternos.Aternos(AT_USER, AT_PASS);
    await at.login();
    const servers = await at.getServers();
    await servers[0].stop();
    res.json({ message: 'Server Stop kar diya gaya hai.' });
  } catch (error) {
    res.status(500).json({ message: 'Error stopping server' });
  }
});

app.listen(3000, () => console.log('Backend on port 3000'));

