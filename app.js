var express = require('express');
var path = require('path');
var userRouter = require('./router/userrouter');
var app = express();

const bodyParser = require("body-parser");
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.set('views', './view');
app.set('view engine', 'ejs');
app.use('/user', userRouter);

app.get('/', function(req, res) {
    // without this (using path module) we need to provide absolute path to the file.
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/user/id', function(req, res) {
    res.render('user');
  });

// Which port to listen on
app.set('port', process.env.PORT || 3000);

module.exports = app;