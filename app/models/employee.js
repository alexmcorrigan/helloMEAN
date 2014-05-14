var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);