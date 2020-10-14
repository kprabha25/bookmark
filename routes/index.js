var express = require('express');
var router = express.Router();
const { isEmpty } = require('lodash');
//const bookmark = require('../src/models/bookmark');


/* GET home page. */
router.get('/bookmarks', async function(req, res, next) {  
 // res.render('index', { title: 'MyExpress' });
});

module.exports = router;
