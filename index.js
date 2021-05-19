const express = require("express");
const app = express();

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
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
