var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var server = app.listen(3000,function(){
   console.log("Express Server has started on port 3000");
}); 


require('./server/express/api')(app);