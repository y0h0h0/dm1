// const cool = require('cool-ascii-faces')
const express = require('express')
// const path = require('path')
const PORT = process.env.PORT || 5000
require('dotenv').config()


express()
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.send('daa ' + process.env.MNAM))
  // .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
