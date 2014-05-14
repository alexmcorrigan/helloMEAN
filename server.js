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

// API routes for bulk employee
router.route('/employees')
    .get(function (req, res) {
        Employee.find(function (err, employees) {
            if (err)
                res.send(err);
            res.json(employees);
        });
    })

    .post(function (req, res) {
        var employee = new Employee();
        employee.name = req.body.name;
        employee.type = req.body.type;

        employee.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Employee Created'});
        });
    });

// API routes for employee ID
router.route('/employees/:employee_id')
    .get(function (req, res) {
        Employee.findById(req.params.employee_id, function (err, employee) {
            if (err)
                res.send(err);
            res.json(employee);
        });
    })

    .put(function (req, res) {
        Employee.findById(req.params.employee_id, function (err, employee) {
            if (err)
                res.send(err);

            employee.name = req.body.name;
            employee.type = req.body.type;
            employee.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Employee Updated' });
            });
        });
    })

    .delete(function (req, res) {
        Employee.remove({
            _id: req.params.employee_id
        }, function (err, employee) {
            if (err)
                res.send(err);
            res.json({ message: 'Employee Deleted'});
        });
    });

//API routes for employee type
//TODO

app.use('/api', router);

//start app
app.listen(port);
console.log('App listening on port: ' + port);
exports = module.exports = app;