var mysql = require('mysql');
var config = require('./db_info').local;

var db = {
    //  var sql = 'INSERT INTO table (name, email, age) VALUES(?, ?, ?)';
    //  var params = ['Jiwon', 'jiwon@mail.com', '23'];
    exec: (res, sql, param) => {
        return new Promise(function (resolve, reject) {
            var conn = mysql.createConnection(config);
            conn.query(sql, param, function (err, result) {
                if (!err) {
                    resolve(result);
                }
                else {
                    console.log(err);
                    res.status(200)
                        .json({ code: '99', msg: "디비에러 발생", error: err })
                        .end();
                }
                conn.destroy();
            });
        });
    }
}
module.exports = db;
