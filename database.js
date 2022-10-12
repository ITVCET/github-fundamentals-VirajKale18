var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'feedback',
    user: 'root',
    password: ''
});

module.exports = connection;