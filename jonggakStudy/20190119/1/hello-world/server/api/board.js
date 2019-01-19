var mysql = require('../db/db_con');

module.exports = function (app) {
    app.get('/test', function (req, res) {
        var sql = "select * from test";
        mysql.exec(res, sql, []).then((data) => {
            res.status(200).json(data).end();
        })
    })


    app.get('/insert', function (req, res) {
        var title = req.query['title'];
        var contents = req.query['contents'];


        if (title && contents && title.trim !== '' && contents.trim !== '') {
            var sql = `INSERT INTO test (title,contents,regDate) VALUES (?,?,now())`;
            mysql.exec(res, sql, [title, contents]).then((data) => {
                res.status(200).json(data).end();
            })
        } else {
            throw console.log('인서트 에러')
        }
    })

    app.get('/update', function (req, res) {
        var pk = req.query['pk']
        var title = req.query['title'];
        var contents = req.query['contents'];
        console.log(pk)
        console.log(title)
        console.log(contents)

        if (pk && title && contents && title.trim !== '' && contents.trim !== '') {
            console.log('조건문')
            var sql = `UPDATE test SET title = ?, contents=? WHERE pk=?`;
            mysql.exec(res, sql, [title, contents, pk]).then((data) => {
                res.status(200).json(data).end();
            })
        } else {
            throw console.log('업데이트 에러')
        }
    })


    app.get('/delete', function (req, res) {
        var pk = req.query['pk']

        console.log(pk)


        if (pk) {
            var sql = `DELETE from test WHERE pk=?`;
            mysql.exec(res, sql, [pk]).then((data) => {
                res.status(200).json(data).end();
            })
        } else {
            throw console.log('제거 에러')
        }
    })



}