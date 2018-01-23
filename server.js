const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const pg  = require('pg');

const config = {
  user: 'osboxes',
  database: 'osboxes',
  password: 'osboxes',
  port: 5432
};

const pool = new pg.Pool(config);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/api/points', function(req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log("Could not connect to database: " + err);
    }
    client.query('SELECT label, height, arm_length,  ST_X(position) as longitude, ST_Y(position) as latitude FROM krakow_oprawy', function (err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(result.rows);
    })
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

var server = app.listen(3000);

