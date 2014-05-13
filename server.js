//modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();

//config
var db = require('./config/db');
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

if ('development' == env) {
}

//routes
require('./app/routes')(app);

//start app
app.listen(port);
console.log('App listening on port: ' + port);
exports = module.exports = app;