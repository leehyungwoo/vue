const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

var mysql = require('./db/db_con');
var res_util = require('./util/res_util');
var data_util = require('./util/data_util');

app.use(cors())
app.use(bodyParser.json())

const BASE_URL = '/api';
app.post(BASE_URL + '/join', function (req, res) {
    var c_arr = ["id|아이디", "password|암호", "name|이름", "phone|연락처"];
    var check_obj = data_util.Validation(req.body.params, c_arr);
    if (check_obj.code != "00") {
        res_util.json_data(res, check_obj);
        return false;
    }
    var id = req.body.params.id;
    var password = req.body.params.password;
    var name = req.body.params.name;
    var phone = req.body.params.phone;

    var over_lap_sql = 'SELECT COUNT(ID) AS OVERLAP FROM member WHERE ID = ?';
    mysql.exec(res, over_lap_sql, [id]).then(data => {
        if (data[0].OVERLAP != 0) {
            res_util.json_data(res, { code: "90", msg: "중복된 아이디 입니다." });
        } else {
            var insert_sql = ` INSERT INTO member (id,password,name,phone,state,regdate) `;
            insert_sql += ` VALUES (?,MD5(?),?,?,1,DATE_FORMAT(now(), '%Y-%c-%e %T')) `;
            mysql.exec(res, insert_sql, [id, password, name, phone]).then(data => {
                res_util.json_data(res, { code: "00", msg: "성공" });
            });
        }
    });
});

app.post(BASE_URL + '/login', function (req, res) {
    var c_arr = ["id|아이디", "password|암호"];
    var check_obj = data_util.Validation(req.body.params, c_arr);
    if (check_obj.code != "00") {
        res_util.json_data(res, check_obj);
        return false;
    }
    var id = req.body.params.id;
    var password = req.body.params.password;
    mysql.exec(res, `SELECT id,name,phone,state,regdate FROM member WHERE id=? AND password=MD5(?)`, [id, password]).then(db_data => {
        var data = {}
        if (db_data.length === 0) {
            data.code = "98";
            data.msg = "아이디가 존재하지 않거나 맞지 않는 암호 입니다.";
        } else {
            if (db_data[0].state === 1) {
                data.code = "00";
                data.msg = "정상";
                data.results = db_data[0];
            }
            else if (db_data[0].state === 0) {
                data.code = "97";
                data.msg = "탈퇴한 회원입니다.";
            } else {
                data.code = "96";
                data.msg = "잘못된 접근입니다.";
            }
        }
        res_util.json_data(res, data);
    });
});

app.post(BASE_URL + '/Withdrawal', function (req, res) {
    var c_arr = ["id|아이디", "password|암호"];
    var check_obj = data_util.Validation(req.body.params, c_arr);
    if (check_obj.code != "00") {
        res_util.json_data(res, check_obj);
        return false;
    }
    var id = req.body.params.id;
    var password = req.body.params.password;
    mysql.exec(res, `SELECT count(id) as c_count FROM member WHERE id=? AND password=MD5(?)`, [id, password]).then(db_data => {
        var data = {}
        if (db_data.length === 0) {
            data.code = "98";
            data.msg = "암호 잘못된 입니다.";
        } else {
            mysql.exec(res, `UPDATE member SET STATE = 0 , WITHDATE = DATE_FORMAT(now(), '%Y-%c-%e %T') WHERE ID = ?`, [id]).then(db_data => {
                data.code = "00";
                data.msg = "정상";
            });
        }
        res_util.json_data(res, data);
    });
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});