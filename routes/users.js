var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Respond with Res')
  res.send('respond with a');
});

module.exports = router;
