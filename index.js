const express = require("express");
const app = express();

let planets = [ 
  { position: 1, name: 'Mercury', moons: 0 },
  { position: 2, name: 'Venus', moons: 0 },
  { position: 3, name: 'Earth', moons: 1 },
  { position: 4, name: 'Mars', moons: 2 },
  { position: 5, name: 'Jupiter', moons: 79 },
  { position: 6, name: 'Saturn', moons: 62 },
  { position: 7, name: 'Uranus', moons: 27 },
  { position: 8, name: 'Neptune', moons: 14 },
];
 
app.get('/planets', (req, res) => {
  return res.send(planets);
});

app.get('/planets/:id', (req, res) => {
  return res.send(planets[req.params.id-1]);
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));
