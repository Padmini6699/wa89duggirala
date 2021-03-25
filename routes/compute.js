var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let random1=Math.floor(Math.random()*6)+1
    let random2=Math.floor(Math.random()*5)+1
    let data1=req.query.x
    let data2=req.query.y
  res.render('compute', { Result1: `pow applied on ${random1} and ${random2} is ${Math.pow(random1,random2)}`,
  Result2: `pow applied on ${data1} and ${data2} is ${Math.pow(data1,data2)}`
 });
});

module.exports = router;
