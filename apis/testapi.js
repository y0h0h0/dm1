// в файле subroute
// const express = require('express')
const router = require('express').Router(); // фишка в роутере
// const cors = require('cors');

// const app = express();

// app.use(cors());

router.get('/getme', (req,res)=>{


  // res.set({
  //   'Content-Type': 'text/plain',
  //   'Content-Length': '123',
  //   'ETag': '12345'
  // })
  res.set({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers'
  })


// header('Content-Type: application/json; charset=utf-8');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');


  // res.send('im a route of getme');
  res.json({"name":"test route", data:[1,4,88]});
});

module.exports = router;
