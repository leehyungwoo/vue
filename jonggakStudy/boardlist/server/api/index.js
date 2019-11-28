var express = require('express');
var app = express();
var dbConnect = require('../db/db_config')
 

// dbConnect.connect(); 
// dbConnect.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// dbConnect.end();
console.log(dbConnect)

//http://localhost:3000/api/join

app.post('/join', function(req, res, next) {
  console.log('왔음')``
  console.log('1',req.body.signUpId)
  console.log('2',req.body.signUpPassword)

});

module.exports = app;
