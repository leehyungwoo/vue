var express = require('express');
var router = express.Router();
var pool = require('../../../modles/user')
const crypto = require('crypto');
var jwt = require('jsonwebtoken')
var cfg = require("../../../../config")

// crypto.pbkdf2('입력비밀번호', '기존salt', 100000, 64, 'sha512', (err, key) => {
//     console.log(key.toString('base64') === '기존 비밀번호');
// });


router.post('/', function (req, res, next) {
    const { u_id, u_ps } = req.body

    pool.getConnection(function (err, conn) {
        if (err) {
            console.log('풀겟커넥션에러')
            conn.release()
            return;
        }

        conn.query(`SELECT * FROM info WHERE u_id=?;`, [u_id], function (error, results, fields) {
            if (error) {
                conn.release();
                console.log('에러');
                throw error
            }

            if (results[0]) {
                crypto.pbkdf2(u_ps, results[0].salt, 104729, 64, 'sha512', (err, key) => {
                    if (err) {
                        conn.release();
                        console.log('에러');
                        throw error
                    }
                    if (key.toString('base64') === results[0].u_ps) {
                        const { u_id, u_name, u_email } = results[0];

                        jwt.sign({ u_id, u_name, u_email }, cfg.privateKey, function (err, token) {
                            console.log('토큰', token);
                            res.json({
                                success: true, msg: '로그인',
                                u_id,
                                u_name,
                                u_email,
                                token
                            })
                            conn.release()
                        })
                    } else {
                        res.json({ success: false, msg: '아이디와 비밀번호를 확인해주세요' })
                    }
                });
            } else {
                res.json({ success: false, msg: '존재하지않는 아이디입니다' })
                conn.release()
            }

        })

    })
});






module.exports = router;
