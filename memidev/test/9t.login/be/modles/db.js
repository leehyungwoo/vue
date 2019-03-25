var mysql = require('mysql');
var cfg = require('../../config')

var pool = mysql.createPool({
    connectionLimit: 100,
    host: cfg.mysql.host,
    user: cfg.mysql.user,
    password: cfg.mysql.password,
    database: cfg.mysql.database
});

var connection = mysql.createConnection({
    host: cfg.mysql.host,
    user: cfg.mysql.user,
    password: cfg.mysql.password,
    database: cfg.mysql.database
});

connection.connect();
connection.query('select * from info', function (error, results, fields) {
    if (error) {
        console.log('mysql createPool be/models/user 에러')
        throw error;
    }
    console.log('mysql createPool be/models/user 진행');
});
connection.end();

module.exports = pool

