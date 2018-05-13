var express = require('express');

var router = express.Router();
var con = require('../connection/dbconnection');

router.get('/', function (req, res) {

    con.query("select * from person", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

router.post('/', function (req, res) {

    con.query("select * from person where id  = " + req.body.user.id, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;