'use strict';

var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var parserRouter = require('./routes/headerParser.js');

app.use('/api/whoami', parserRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('Server started...');
});