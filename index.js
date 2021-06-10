//importing thrd part mdls

const express = require('express')
const app=express()                                      //executing
const morgan = require('morgan')
const mongoose = require ('mongoose')
 require('dotenv/config')



//body parser

app.use(express.json());




//middleware
app.use(morgan('dev'))










//router
const Personrouter = require('./PersonsRoute')
app.use('/persons',Personrouter)






//localhost


app.listen(2000,() =>{
    console.log("Server Started in Port 2000");
})



//DB coonection
mongoose.set('useNewUrlParser',true)
mongoose.set('useUnifiedTopology',true)

mongoose.connect(process.env.MYDB_CONNECTION,(err) =>{
    if (err) {console.log('DB not Connected')}
    console.log('DB conneted successfully');
})
