var express = require('express');
var router = express.Router();
var pool = require('../../../modles/db')
const crypto = require('crypto');


router.get('/', function (req, res, next) {
    res.send('웰컴to signUp api');
});

router.get('/check', function (req, res, next) {
    const { u_id } = req.query
    console.log(u_id)
    pool.getConnection(function (err, conn) {
        if (err) {
            conn.release()
            return;
        }
        conn.query(`SELECT * FROM info WHERE u_id=?;`, [u_id], function (error, results, fields) {
            if (error) {
                conn.release();
                console.log('signUp 아이디체크 에러');
                res.json({ success: false, msg: '사용 불가능한 아이디' })
                return
            }
            if (results.length >= 1) {
                res.json({ success: false, msg: '이미 아이디 있음' })
            } else {
                res.json({ success: true, msg: '사용 가능한 아이디' })
            }
            conn.release()
        })
    })

});

router.post('/in', function (req, res, next) {
    var { u_id, u_ps, u_name, u_email } = req.body.info;
    crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(u_ps, buf.toString('base64'), 104729, 64, 'sha512', (err, key) => {
            var u_ps = key.toString('base64'); // '솔트처리된 암호'
            var salt = buf.toString('base64'); // '솔트'

            pool.getConnection(function (err, conn) {
                if (err) {
                    conn.release()
                    return;
                }
                console.log(u_name)
                pool.query(`INSERT INTO info (u_id,u_ps,u_name,u_email,state,regDate,salt) VALUES (?,?,?,?,0,now(),?)`, [u_id, u_ps, u_name, u_email, salt],
                    function (error, results, fields) {
                        if (error) {
                            conn.release();
                            console.log('에러', error)
                            throw error
                        }
                        res.json({ success: true, msg: '가입완료' })
                        conn.release();
                    }
                )
            })
        });
    });
});


module.exports = router;
