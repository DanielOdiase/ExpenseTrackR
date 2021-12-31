
const path =require('path')
const express = require ('express')
const dotenv = require('dotenv')
const colors = require ('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDB()


const transactions = require('./routes/transactions')
const app =express()

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

app.use(express.json())
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  

app.use('/api/v1/transactions',transactions)
//Serve Static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }

const PORT= process.env.PORT || 5000
app.listen(PORT,console.log(`Server runnng in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))