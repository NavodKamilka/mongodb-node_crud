const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/User1'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('Connected')
})

app.use(express.json())

const userRouter = require('./routers/users.route')
app.use('/users',userRouter)


app.listen(9000, () => {
    console.log('Server Started')
})