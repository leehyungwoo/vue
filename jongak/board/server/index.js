const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();
var db_con = require('./db/db_con');
var res_util = require('./util/res_util');

app.use(cors())
app.use(bodyParser.json())

const BASE_URL = '/api';
app.post(BASE_URL + '/join', function (req, res) {
    var id = req.body.params.id;
    var password = req.body.params.password;
    var sql = `INSERT INTO logininfo (id,password) VALUES (?, ?)`;
    db_con.exec(res,sql,[id,password]).then(data => {
        res_util.json_data(res,{code : 0,info :"성공"});
    })

});


app.post(BASE_URL + '/login', function (req, res) {
    var id = req.body.params.id;
    var password = req.body.params.password;

    db_con.exec(res,`SELECT * FROM logininfo WHERE id=? AND password=?`,[id,password]).then(db_data => {
        var data = {};
        if (db_data.length === 0) {
            data.code = 99;
            data.info = "오류";
            data.results = db_data;
   
        } else {
            data.code = 0;
            data.info = db_data[0].id + "님 환영합니다";
            data.results = db_data[0].id;
        }
        res_util.json_data(res,data);
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});