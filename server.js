var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

var app = express()
app.use(cors())
app.use(express.json())

app.get('/users', function (req, res, next) {
connection.query(
  'SELECT * FROM `users` ',
  function(err, results, fields) {
    res.json(results);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
})

app.get('/users', function (req, res, next) {
  connection.query(
      'SELECT * FROM `users`',
      function (err, results, fields) {
          res.json(results);
      }
  );
})

app.get('/users/:id', function (req, res, next) {
  const id = req.params.id;
  connection.query(
      'SELECT * FROM `users` WHERE `id` = ?',
      [id],
      function (err, results) {
          res.json(results);
      }
  );
})

app.post('/users', function (req, res, next) {
  connection.query(
      'INSERT INTO `users`(`Email`, `Password`, `Firstname`, `Lastname`, `Gender`) VALUES (?, ?, ?, ?, ?)',
      [req.body.Email, req.body.Password, req.body.Firstname, req.body.Lastname, req.body.Gender],
      function (err, results) {
          res.json(results);
          console.log(err)
          console.log(results)
      }
  );
})

app.put('/users', function (req, res, next) {
  connection.query(
      'UPDATE `users` SET `Email`= ?, `Password`= ?, `Firstname`= ?, `Lastname`= ?, `Gender`= ? WHERE id = ?',
      [req.body.Email, req.body.Password, req.body.Firstname, req.body.Lastname, req.body.Gender, req.body.id],
      function (err, results) {
          res.json(results);
      }
  );
})

app.delete('/users', function (req, res, next) {
  connection.query(
      'DELETE FROM `users` WHERE id = ?',
      [req.body.id],
      function (err, results) {
          res.json(results);
      }
  );
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000_Hello')
})
