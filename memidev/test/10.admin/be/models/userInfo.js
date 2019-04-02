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
                reject('커넥션에러')
            }
            connection.query(query, sql, function (error, results, fields) {
                connection.release();
                if (error) {
                    return reject(error)
                };
                if (results) {
                    return resolve(results)
                } else {
                    return reject('검색실패')
                }
            });

        });
    })
}

module.exports = poolConnection
