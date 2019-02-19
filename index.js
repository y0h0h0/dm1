const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
require('dotenv').config()

const app = express();

  app.use(express.static('public'));

  app.use('/lol', (req, res) => res.send('lol path '));

  app.use('/clan1', (req, res) => {
    var request = require('request');
    request('https://alpha.tl/api?clan=1', function (error, response, body) {
      let parsedBody = JSON.parse(body);
      res.send( parsedBody.name  + ' ___ ' + parsedBody.country )
    });
  }
  );



  app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });




  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
