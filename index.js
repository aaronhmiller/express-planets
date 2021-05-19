const express = require("express");
const app = express();

let planets = {
  1: { position: 1, name: 'Mercury', moons: 0 },
  2: { position: 2, name: 'Venus', moons: 0 },
  3: { position: 3, name: 'Earth', moons: 1 },
  4: { position: 4, name: 'Mars', moons: 2 },
  5: { position: 5, name: 'Jupiter', moons: 79 },
  6: { position: 6, name: 'Saturn', moons: 62 },
  7: { position: 7, name: 'Uranus', moons: 27 },
  8: { position: 8, name: 'Neptune', moons: 14 },
};
 
app.get('/planets', (req, res) => {
  return res.send(Object.values(planets));
});

app.get('/planets/:id', (req, res) => {
  return res.send(planets[req.params.id]);
});
 
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
 
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
 
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.patch('/', (req, res) => {
  return res.send('Received a PATCH HTTP method');
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));
