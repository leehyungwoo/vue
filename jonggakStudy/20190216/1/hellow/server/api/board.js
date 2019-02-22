var mysql = require('../db/dbConn.js');


module.exports = function(app) {
    var Name = "/board";
    var Result_date = {code : "00",msg :"정상"};
    app.post(Name+'/list', function(req, res) {
        var sql = "select pk, title, regDate from test";

        mysql.exec(res,sql,[]).then(data => {
            res.status(200).json(data).end();
        });
    });
    app.post(Name+'/insert', function(req, res) {
        var title = req.body["title"];
        var content = req.body["content"];
        var check = false;
        if(title && content) {
            if(title.trim() != '' && content.trim() != ''){
                check = true;
            }
        } 
        if(check){
            var sql = `insert into test (title, content, regDate)`
            sql += ` values (?, ?, now())`

            mysql.exec(res,sql,[title, content]).then(data => {

                res.status(200).json(Result_date).end();
            });
        } else {
            res.status(200).json({code:"99",msg:"파라미터 없음"}).end();
        }
    });



    app.post(Name+'/update', function(req, res) {
        var pk = req.body["pk"];
        var title = req.body["title"];
        var content = req.body["content"];
        var check = false;
        if(title && content && pk) {
            if(title.trim() != '' && content.trim() != '' && pk != ''){
                check = true;
            }
        } 
        if(check){
            var sql = `update test set title = ?, content = ?, uptDate = now() where pk = ?`
            

            mysql.exec(res,sql,[title, content, pk]).then(data => {
                res.status(200).json({code:"00",msg:"업데이트 성공"}).end();
            });
        } else {
            res.status(200).json({code:"99",msg:"파라미터 없음"}).end();
        }

    });



    app.post(Name+'/delete', function(req, res) {
        var pk = req.body["pk"] ? req.body["pk"] :  req.query["pk"];
        var check = true;
        if(!pk || pk == "")  {
            check = false;
        } 
        if(check){
            var sql = `delete from test where pk = ?`
            

            mysql.exec(res,sql,[pk]).then(data => {
                res.status(200).json({code:"00",msg:"삭제 성공"}).end();
            });
        } else {
            res.status(200).json({code:"99",msg:"파라미터 없음"}).end();
        }

    });


    app.post(Name+'/detail', function(req, res) {
        var pk = req.body["pk"];
        var check = false;
        if(pk) {
            check = true;
        } 
        if(check){
            var sql = `select * from test where pk = ?`
            

            mysql.exec(res,sql,[pk]).then(data => {
                res.status(200).json(data).end();
            });
        } else {
            res.status(200).json({code:"99",msg:"파라미터 없음"}).end();
        }

    });
}