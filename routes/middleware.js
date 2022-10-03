var express = require('express');
var router = express.Router();

  const logger = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()}--- ${req.method} --- ${req.originalUrl} --- ${req.protocol} --- ${req.ip}`)
    if(req.params.id == 1) next();
    res.redirect('/middleware/not-authenticate')
   }
   router.use(logger)

   router.get('/', function(req, res, next) {
    res.send(`this is middleware route`);
  });
  
module.exports = router;