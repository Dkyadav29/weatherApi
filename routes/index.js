const express = require('express');
const {weatherr} = require('../modules/index')

 const app = express();
 exports.route = (app) => {
app.post('/temp', weatherr);
    
}


 