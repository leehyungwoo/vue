var mysql_dbc = require('../db/db_con')();
var connection = mysql_dbc.init();

var Name ="/api";
module.exports = function(app){
  app.get(Name+'/main',function(req , res){
    var sql = 'select * from member'
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
         res.status(200).json(result);
      });
  });

  app.get(Name+'/test',function(req , res){
    if(req.query['s']){
      console.log(req.query['s']) 

    }else{
      console.log("없음") 
    }
   console.log(req.query) 
   //req.body['s']
  });
}