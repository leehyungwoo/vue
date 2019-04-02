var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

pool.getConnection(function (err, connection) {
    if (err) {
        console.log('userInfo db 연결 에러')
        throw err; // not connected!
    }
    console.log('userInfo db 커넥션')
    connection.release();
});

function poolConnection(query, sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
                throw err;
            }
            connection.query(query, sql, function (error, results, fields) {
                if (error) {
                    reject('userInfo db 쿼리 에러')
                    throw error;
                };
                if (results) {
                    resolve(results)
                } else {
                    reject('userInfo db 쿼리 받는요청 없음')
                }
                connection.release();
            });

        });
    })
}

module.exports = poolConnection
