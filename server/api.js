const express = require('express');
const router = express.Router();

const points = [
  {
    id: 1,
    name: "Punkt 1",
    description: "Opis punktu 1",
    latitude: 50.061389,
    longitude: 19.938333
  },
  {
    id: 2,
    name: "Punkt 2",
    description: "Opis punktu 2",
    latitude: 50.02323,
    longitude: 19.9123
  },
  {
    id: 3,
    name: "Punkt 3",
    description: "Opis punktu 3",
    latitude: 50.062423,
    longitude: 19.91231233
  }
];

router.get('/points', (req, res) => {
  res.send(points);
});

module.exports = router;
