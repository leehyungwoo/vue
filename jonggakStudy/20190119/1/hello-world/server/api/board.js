var mysql = require('../db/db_con');


module.exports = function (app) {

    var name = "/board";
    var DataError = { code: '00', msg: '필수 입력값이 입력되지 않았습니다.' }
    var Result_date = { code: "00", msg: "정상" };

    app.post(name + '/test', function (req, res) {
        console.log('test')
        var sql = "select * from test";
        mysql.exec(res, sql, []).then((data) => {
            res.status(200).json(data).end();
        })
    })

    app.post(name + '/detail', function (req, res) {
        console.log('detail')

        var pk = req.body["pk"] ? req.body["pk"] : req.query["pk"];
        if (!pk || pk === "") {
            res.status(200).json(DataError).end();
            return false;
        }
        var sql = "select * from test WHERE pk = ?";
        mysql.exec(res, sql, [pk]).then((data) => {
            res.status(200).json(data).end();
        })
    })

    app.post(name + '/insert', function (req, res) {
        var title = req.body['title'];
        var content = req.body['content'];

        if (title && content && title.trim !== '' && content.trim !== '') {
            var sql = `INSERT INTO test (title,content,regDate) VALUES (?,?,now())`;

            mysql.exec(res, sql, [title, content]).then((data) => {
                res.status(200).json(Result_date).end();
            })
        } else {
            throw console.log('인서트 에러')
        }
    })

    app.post(name + '/update', function (req, res) {
        var pk = req.body['pk']
        var title = req.body['title'];
        var content = req.body['content'];
        console.log(pk)
        console.log(title)
        console.log(content)

        if (pk && title && content && title.trim !== '' && content.trim !== '') {
            console.log('조건문')
            var sql = `UPDATE test SET title = ?, content=?, uptDate=now() WHERE pk=?`;
            mysql.exec(res, sql, [title, content, pk]).then((data) => {
                res.status(200).json(Result_date).end();

            })
        } else {
            throw console.log('업데이트 에러')
        }
    })


    app.post(name + '/delete', function (req, res) {
        var pk = req.body["pk"] ? req.body["pk"] : req.query["pk"];


        if (pk) {
            var sql = `DELETE from test WHERE pk=?`;
            mysql.exec(res, sql, [pk]).then((data) => {

                res.status(200).json(Result_date).end();
            })
        } else {
            throw console.log('제거 에러')
        }
    })



}