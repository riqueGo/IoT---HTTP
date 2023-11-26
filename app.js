const express = require('express');
const xml2js = require('xml2js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 3000;

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

//Exercise 1
app.get('/temperature', (req, res) => {
  const unit = req.query.unit === 'F' ? req.query.unit : 'C';

  const responseData = { temperature: randomInt(1, 40), unit };

  if (req.headers['accept'] === 'application/xml') {
    const xmlBuilder = new xml2js.Builder();
    const xmlResponse = xmlBuilder.buildObject(responseData);

    res.set('Content-Type', 'application/xml');
    res.send(xmlResponse);
  } else {
    res.set('Content-Type', 'application/json');
    res.send(responseData);
  }
});

//Exercise 2
app.get('/temperature-from-server', async (req, res) => {
  try {
    const response = await fetch(
      'http://devices.webofthings.io/pi/sensors/temperature',
      {method: 'get', headers: {'accept': 'application/json'}}
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
