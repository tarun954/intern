const express = require('express'); 
const dotenv = require('dotenv');
const  mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
 

const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 5050
mongoose.connect(
      "mongodb+srv://admin:dN0En0kSqxjZOlZQ@cluster0.xzwly.mongodb.net/address?retryWrites=true&w=majority"
).then(()=>
    console.log("Data base is connected")).catch((err)=> console.log(err));

// log requests
app.use(morgan('tiny'));

 

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});