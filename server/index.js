const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
<<<<<<< HEAD
const authRoute = require('./auth/routes')()
=======

const authRoute = require('./auth/routes')()

>>>>>>> 1321adb7c0090df54b43f3af425ee8a0a786047b
dotenv.config()

const app = express();

app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))

app.use(cors({origin:'*'}))

mongoose.connect('mongodb+srv://vsarraf15:pass@cluster0.wweyo3v.mongodb.net/',{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB connected")
})
 app.use('/auth', authRoute)

app.use('/auth', authRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`)
})