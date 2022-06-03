const request = require('request');
const dotenv = require('dotenv');
const express = require('express');
const { json, send } = require('express/lib/response');
 const app = express();
dotenv.config();

 
exports.weatherr = async(req, res,next) => {

     let city = req.body.city; 

    
      request({url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`}, function (err, response, body) {

        if (err) {
            return responce.status(400).send(err);
        } else{
        
      const weather = JSON.parse(body)
      console.log(weather)
       
        }

       
    })
      

    

}






