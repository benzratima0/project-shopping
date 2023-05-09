var express = require('express')
var cors = require('cors')
const mysql = require('mysql2')
const secret = 'Fullstack-Login-2021'
require('dotenv').config()
var jwt = require('jsonwebtoken');

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

app.post('/users', function (req, res, next) {
  connection.execute(
      'SELECT * FROM `users` WHERE Email=?',
      [req.body.Email],
      function (err, users,fields) {
        if(err){res.json({status:'error',message: err}); return }
        if(users.length == 0){res.json({status:'error',message:'no user found'}); return }
        bcrypt.compare(req.body.Password,users[0].Password,function(err,isLogin){
          if(isLogin){
            var token = jwt.sign({Email: users[0].Email, secret})
            res.json({status: 'ok',message: 'Login success',token})
          }else{
            res.json({status: 'error',message: 'Login failed'})
          }

        });
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

app.get('/product', function (req, res, next) {
  connection.query(
    'SELECT * FROM `product` ',
    function(err, results, fields) {
      res.json(results);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  })
  
  app.get('/product', function (req, res, next) {
    connection.query(
        'SELECT * FROM `product`',
        function (err, results, fields) {
            res.json(results);
        }
    );
  })
  
  app.get('/product/:ID', function (req, res, next) {
    const id = req.params.ID;
    connection.query(
        'SELECT * FROM `product` WHERE `ID` = ?',
        [id],
        function (err, results) {
            res.json(results);
        }
    );
  })
  
  app.post('/product', function (req, res, next) {
    connection.query(
        'INSERT INTO `product`(`NameProduct`,`Description`,`Picture`,`Price`,`Quantity`) VALUES (?, ?, ?, ?, ?)',
        [req.body.NameProduct, req.body.Description, req.body.Picture, req.body.Price, req.body.Quantity],
        function (err, results) {
            res.json(results);
            console.log(err)
            console.log(results)
        }
    );
  })
  
  app.put('/product', function (req, res, next) {
    connection.query(
        'UPDATE `product` SET `NameProduct`=?,`Description`=?,`Picture`=?,`Price`=?,`Quantity`=? WHERE ID = ?',
        [req.body.NameProduct, req.body.Description, req.body.Picture, req.body.Price, req.body.Quantity, req.body.ID],
        function (err, results) {
            res.json(results);
        }
    );
  })
  
  app.delete('/product', function (req, res, next) {
    connection.query(
        'DELETE FROM `product` WHERE ID = ?',
        [req.body.ID],
        function (err, results) {
            res.json(results);
        }
    );
  })

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})
