require('dotenv').config(); // inject fake env vars
const { PORT } = require('./config');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json()); // teaches express to parse req.body
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
  res.send(`
  <h1>Welcome to UFO Custom Covers</h1>
  <p>Custom Sanded, Polished, and Etched Engine Covers</p>
  `)
})

server.use('*', (req, res, next) => {
  res.json({
    message: 'Welcome to UFO Custom Covers'
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});