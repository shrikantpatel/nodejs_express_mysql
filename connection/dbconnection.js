var mysql = require('mysql');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "person"
});

module.exports = con;