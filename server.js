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
    mongoose.connect('mongodb://localhost:27017/helloMEAN');
}

var Employee = require('./app/models/employee');

//routes
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        'message': 'API WORKING'
    });
});

router.use(function (req, res, next) {
    console.log('stuff happened');
    next();
});

router.route('/consultants')

    .get(function (req, res) {
        res.json({
            'type': 'consultant'
        });
    });

router.route('/supportStaff')

    .get(function (req, res) {
        res.json({
            'type': 'supportStaff'
        });
    });

app.use('/api', router);

//start app
app.listen(port);
console.log('App listening on port: ' + port);
exports = module.exports = app;