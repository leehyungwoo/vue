var mysql = require('../db/dbConn.js');


module.exports = function (app) {
    var Name = "/member";
    var Result_date = { code: "00", msg: "정상" };
    app.post(Name + '/list', function (req, res) {
        var title = req.body["title"];
        var content = req.body["content"];
        var sql = "select * from member where id=? and password=?";
        mysql.exec(res, sql, [title, content]).then(data => {
            res.status(200).json(data).end();
        });
    });
    app.post(Name + '/insert', function (req, res) {
        var title = req.body["title"];
        var content = req.body["content"];
        var name = req.body["name"];
        var check = false;
        console.log(req.body)
        if (title && content && name) {
            if (title.trim() != '' && content.trim() != '' && name.trim() != '') {
                check = true;
            }
        }
        if (check) {
            var sql = `insert into member (id, password, name, regDate ,state)`
            sql += ` values (?, ?, ?, now(),0)`

            mysql.exec(res, sql, [title, content, name]).then(data => {

                res.status(200).json(Result_date).end();
            });
        } else {
            res.status(200).json({ code: "99", msg: "파라미터 없음" }).end();
        }
    });



    app.post(Name + '/update', function (req, res) {
        var uid = req.body["uid"];
        var nps = req.body["nps"];
        var ps = req.body["ps"];
        var name = req.body["name"];
        console.log(req.body)


        var sql = `update member SET password=?, name =?, uptDate = now() where id = ? and password = ?`

        mysql.exec(res, sql, [nps, name, uid, ps]).then(data => {
            console.log('data')
            console.log(data)
            res.status(200).json({ code: "00", msg: "업데이트 성공" }).end();
        }).catch(err => {

        });


    });



    // app.post(Name + '/delete', function (req, res) {
    //     var pk = req.body["pk"] ? req.body["pk"] : req.query["pk"];
    //     var check = true;
    //     if (!pk || pk == "") {
    //         check = false;
    //     }
    //     if (check) {
    //         var sql = `delete from member where pk = ?`


    //         mysql.exec(res, sql, [pk]).then(data => {
    //             res.status(200).json({ code: "00", msg: "삭제 성공" }).end();
    //         });
    //     } else {
    //         res.status(200).json({ code: "99", msg: "파라미터 없음" }).end();
    //     }

    // });


    // app.post(Name + '/detail', function (req, res) {
    //     var pk = req.body["pk"];
    //     var check = false;
    //     if (pk) {
    //         check = true;
    //     }
    //     if (check) {
    //         var sql = `select * from member where pk = ?`


    //         mysql.exec(res, sql, [pk]).then(data => {
    //             res.status(200).json(data).end();
    //         });
    //     } else {
    //         res.status(200).json({ code: "99", msg: "파라미터 없음" }).end();
    //     }

    // });
}