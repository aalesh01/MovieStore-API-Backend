const express = require('express')
const connectDatabase = require('./db')
const user = require('./users')



const app = express()



connectDatabase()
.then(()=>{
    app.listen('8080')
    user.create()
})


