//import
var express = require("express")
require("./connection")
var empModel = require("./model/employee")
var cors=require('cors')
//initialize
var app = express()
//middleware
app.use(express.json())
app.use(cors())
//api
app.get('/trial', (req, res) => {
    res.send('Message for trial')
})
app.get('/diya', (req, res) => {
    res.send('Message for diya')
})
//add api
app.post('/add',async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "Employee added successfully" })
    } catch (error) {
        console.log(error)
    }
})
//view api
app.get('/view', async (req, res) => {
    try {
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
//delete api
app.delete('/remove/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Employee deleted successfully" })
    } catch (error) {
        console.log(error)
    }
})
//update api
app.put('/update/:id', async (req, res) => {
    try {
        data =await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "Employee updated successfully" ,data})
    } catch (error) {
        console.log(error)
    }
})
//port
app.listen(3004,() => {
    console.log("Server is running on port 3004")
})