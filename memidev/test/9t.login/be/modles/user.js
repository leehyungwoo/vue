var mysql = require('mysql');
var cfg = require('../../config')

module.exports = mysql.createPool({
    connectionLimit: 10,
    host: cfg.mysql.host,
    user: cfg.mysql.user,
    password: cfg.mysql.password,
    database: cfg.mysql.database
});



