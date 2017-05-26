'use strict';

var express = require("express");
var router = express.Router();

router.route('/')
.all(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
.get(function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    var info = {
     'ipaddress': ip,
     'language': req.headers["accept-language"].split(',')[0],
     'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
    res.set('Content-Type', 'application/json');
    res.json(info);
});

module.exports = router;