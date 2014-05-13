var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    type: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);