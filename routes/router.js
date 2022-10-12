var express = require('express');
var routes = express.Router();

/** this is our middleware function */
 const logger = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()}--- ${req.method} --- ${req.originalUrl} --- ${req.protocol} --- ${req.ip}`)
    next()
   }

   //routes.all('*',logger); /** we can call our middleware this way */

   routes.use(logger);  /** we can call our middleware this way also */

   routes.get('/',(req,res,next)=>{
    console.log("this is router tutorial practice");
    res.send("this is router tutorial practice");
   })

   module.exports = routes;
   