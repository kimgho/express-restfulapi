const express = require('express')
const router = require('./Controller/Router')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT
const bodyParser = require('body-parser')
const db = require('./helper/db')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',router)
db.connect((err)=>{
    if(!err){
        console.log("db connect..!")
    }
})
app.listen(port,()=>{
    console.log(`Hello localhost:${port}`);
})
