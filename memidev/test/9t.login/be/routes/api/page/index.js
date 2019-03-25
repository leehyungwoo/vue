var express = require('express');
var router = express.Router();
var pool = require('../../../modles/db')

router.post('/', function (req, res, next) {
    const { name } = req.body
    console.log('페이지네임', name)
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log('페이지 풀겟커넥션에러')
            conn.release()
            return;
        }

        var query = (sql, val) => {
            return new Promise((resolve, reject) => {
                conn.query(sql, val, function (error, results, fields) {
                    if (error) {
                        console.log('에러인')
                        reject(error)
                    }
                    if (results) {
                        resolve(results)

                    }
                })
            })
        }

        query(`SELECT * FROM page WHERE name=?;`, [name]).then((r) => {
            if (r.length === 0) {
                console.log('여기2')

                res.json({ success: false, msg: `${name}페이지가 생성이 되지 않았습니다` })
                conn.release()
                return query(`INSERT INTO page (name,level) VALUE (?,?);`, [name, 3])
                    .then((r) => {
                        console.log('첫번째', r)
                        res.json({
                            success: true,
                            msg: '페이지 생성되었습니다'
                        })
                        conn.release()
                    })
                    .catch((err) => {
                        console.log('요기1')
                        console.log(err)
                        throw new Error(`페이지${name}가 생성되지 않았습니다`)

                    })
            }
            //DB page의 레벨이 유저의 레벨보다 낮으면
            //디비<사용자
            console.log('디비레벨', r[0].level)
            console.log('사용자레벨', req.user.level)
            console.log(r[0].level < req.user.level)

            if (r[0].level < req.user.level) {
                console.log('시랭')
                throw new Error(`레벨때문에 ${name}들어갈수 없습니다`)
            }

            query('select incnt from page WHERE name=?', [name]).then((r) => {

                return r[0].incnt + 1;;

            }).then((incnt) => {
                query('UPDATE page SET incnt =? WHERE name=? ', [incnt, name]).then((r) => {
                    res.json({
                        success: true,
                        incnt: incnt
                    })
                    conn.release()
                }).catch((err) => {
                    if (err) {
                        console.log('요기2')
                        throw new Error(`페이지 ${name} 생성이 안되었습니다.`)
                    }
                })
            }).catch((err) => {
                if (err) {
                    console.log('요기3')
                    throw new Error('디비에러')
                }
            })
        }).catch((err) => {
            console.log('여기마지막')
            res.json({
                success: false,
                msg: err.message
            })
            conn.release()
        })
    })
})







module.exports = router;
