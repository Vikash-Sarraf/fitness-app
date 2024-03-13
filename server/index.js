const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express();

app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))

app.use(cors({origin:'*'}))
// aryaman aagya

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`)
})