// в файле subroute
const router = require('express').Router(); // фишка в роутере

router.get('/getme', (req,res)=>{
  // res.send('im a route of getme');
  res.json({"name":"test route", data:[1,4,88]});
});

module.exports = router;
