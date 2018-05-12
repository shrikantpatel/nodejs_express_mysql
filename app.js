var express = require('express');
var path = require('path');
var userRouter = require('./router/userrouter');
var app = express();

app.use('/user', userRouter);

app.get('/', function(req, res) {
    // without this (using path module) we need to provide absolute path to the file.
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Which port to listen on
app.set('port', process.env.PORT || 3000);

module.exports = app;

