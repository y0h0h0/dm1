// в файле subroute
const express = require('express')
const router = require('express').Router(); // фишка в роутере
const cors = require('cors');

const app = express();

app.use(cors());

router.get('/getme', (req,res)=>{
  // res.send('im a route of getme');
  res.json({"name":"test route", data:[1,4,88]});
});

module.exports = router;
