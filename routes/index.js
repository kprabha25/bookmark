var express = require('express');
var router = express.Router();
const { isEmpty } = require('lodash');
const Bookmark = require('../src/models/bookmark');


/* GET home page. */
router.get('/bookmarks', async function(req, res, next) {  
 // res.render('index', { title: 'MyExpress' });

 try {
    const bookmarks = await Bookmark.find({});

    return res.json({
        bookmarks
    });
} catch (error) {
    return res.status(500).json({
        message: 'Internal Server error'
    });
}
});

module.exports = router;
