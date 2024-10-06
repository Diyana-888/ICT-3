var mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Salary: Number
})
var EmployeeModel = mongoose.model("employee", schema)
module.exports = EmployeeModel