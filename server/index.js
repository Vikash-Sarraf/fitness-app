const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./auth/routes')()
dotenv.config()

const app = express();

app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))

app.use(cors({origin:'*'}))

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB connected")
})
 app.use('/auth', authRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`)
})