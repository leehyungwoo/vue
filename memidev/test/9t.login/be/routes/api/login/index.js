var express = require('express');
var router = express.Router();
var pool = require('../../../modles/db')
const crypto = require('crypto');
var jwt = require('jsonwebtoken')
var cfg = require("../../../../config")

router.post('/', function (req, res, next) {
    const { u_id, u_ps } = req.body

    pool.getConnection(function (err, conn) {
        if (err) {
            console.log('로그인 풀겟커넥션에러')
            conn.release()
            return;
        }

        conn.query(`SELECT * FROM info WHERE u_id=?;`, [u_id], function (error, results, fields) {
            if (error) {
                conn.release();
                console.log('로그인 아이디찾기 에러');
                throw error
            }

            if (results[0]) {
                crypto.pbkdf2(u_ps, results[0].salt, 104729, 64, 'sha512', (err, key) => {
                    if (err) {
                        console.log('로그인 크립토 에러');
                        conn.release();
                        throw error
                    }
                    if (key.toString('base64') === results[0].u_ps) {
                        const { u_id, u_name, u_email, level } = results[0];

                        jwt.sign({ u_id, u_name, u_email, level }, cfg.privateKey, function (err, token) {
                            if (err) {
                                conn.release();
                                throw '토큰 할당 실패'
                            }

                            if (token) {

                                res.json({
                                    success: true,
                                    msg: '로그인',
                                    u_id,
                                    u_name,
                                    u_email,
                                    level,
                                    token
                                })
                                conn.release();
                            }
                        })
                    } else {
                        res.json({ success: false, msg: '아이디와 비밀번호를 확인해주세요' })
                        conn.release();
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
