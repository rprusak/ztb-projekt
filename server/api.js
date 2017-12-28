const express = require('express');
const router = express.Router();

const points = [
  {
    id: 1,
    name: "Punkt 1",
    description: "Opis punktu 1",
    latitude: 30,
    longitude: 50
  },
  {
    id: 2,
    name: "Punkt 2",
    description: "Opis punktu 2",
    latitude: 20,
    longitude: 50
  },
  {
    id: 3,
    name: "Punkt 3",
    description: "Opis punktu 3",
    latitude: 30,
    longitude: 50
  }
];

router.get('/points', (req, res) => {
  res.send(points);
});

module.exports = router;
