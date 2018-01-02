const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const pg = require('pg-query')
//TODO: change database location and enable
// pg.connectionParameters = 'postgres://postgres:qwerty@localhost:5432/postgis_24_sample';

// API file for interacting with MongoDB
const api = require('./server/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

//TODO: enable when database will be set
// app.get('/api/points', function(req, res) {
//   var query = req.query;
//   var limit = (typeof(query.limit) !== "undefined") ? query.limit : 40;
// //TODO: change particular particular names
//   pg('SELECT id,name,ST_X(punkt) as longitude,ST_Y(punkt) as latitude FROM miasta ;', function(err, rows, result){
//     if(err) {
//       res.send(500, {http_status:500,error_msg: err})
//       return console.error('error running query', err);
//     }
//     res.send(rows);
//     return rows;
//   })
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

var server = app.listen(3000);

