const express =  require('express');
const dotenv =  require('dotenv');
const app = express();
const bodyParser = require('body-parser')
const {route} = require('./routes/index')
dotenv.config();

 
 //parse e application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

route(app);



app.listen( process.env.PORT,  (req,res) => {
    try{
       console.log(`Server is start on the http://localhost:${process.env.PORT}`)
    }
    catch{
         res.status(400).send(err);
        
    }
 
 })