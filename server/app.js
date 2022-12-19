const dotenv = require("dotenv")

const express = require('express')
const app = express()
const mongoose = require('mongoose')

dotenv.config({path:'./config.env'})
     require('./db/conn')

     app.use(express.json())


     app.use(require('./router/auth'))
    


const middleware = (req , res, next) =>{
    console.log("my middleware")
    next()
    } 




app.get('/' , (req,res) =>{ 
res.send("hii")
})

app.listen(5000 , () =>{
console.log("server is running ")
})