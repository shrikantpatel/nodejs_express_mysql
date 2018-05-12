var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "person"
});

var userRouter = express.Router();
userRouter.get('/', function (req, res) {

    con.query("select * from person", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

app.use('/user', userRouter);

app.get('/', function(req, res) {
    // without this (using path module) we need to provide absolute path to the file.
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Which port to listen on
app.set('port', process.env.PORT || 3000);

// Start listening for HTTP requests
var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    // intialize connection to database
    con.connect(function (err) {
        if (err) throw err;
    });

    console.log('Example app listening at http://%s:%s', host, port);
});