const express = require("express")
const dotenv = require('dotenv').config()
const app = express()
const morgan = require("morgan")
const connect = require('./config/db')
const todoRoutes = require('./routes/todos')
const colors = require('colors')

PORT = process.env.PORT || 5000
app.use(morgan('dev'))
app.use(express.json())
connect();
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.rainbow)
})

app.use("/api/v1/todo", todoRoutes);

app.get('/test', (req, res) => {
    res.send('<h1>this is test route</h1>')

})


app.post('/test', (req, res) => {
    const { name, age } = req.body

    console.log(name)
    console.log(age)
    res.json({
        message: "data added successfully",
        data: name, age
    })
})