const express = require('express')
const connectDatabase = require('./db')
const movies = require('./routes/movies')
const user = require('./users')


const app = express()

app.use(express.json())

app.use('/movies',movies)

app.get('/',(req,res)=>{
    console.log("i am here")
    res.end("Hello this server is working properly... :)")
})



connectDatabase()
.then(()=>{
    app.listen('8080')
})

