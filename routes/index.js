var express = require('express');
var router = express.Router();
const { isEmpty } = require('lodash');
const Bookmark = require('../src/models/bookmark');


/* GET home page. */
router.get('/', async function (req, res, next) {
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

router.post('/', async(req, res) => {
    if(isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body Should not be empty',
            statusCode: 403
        })
    }
    const { category,url,notes,domain,status,created_at,updated_at } = req.body;
    const newBookmark = new Bookmark({
        category,
        url,
        notes,
        domain,
        status,
        created_at:Date.now(),
        updated_at:Date.now()
    });
    try{
        await newBookmark.save();
        res.json({
            message: "Data successfully saved",
            statusCode: 200,
            category,
            url,
            notes,
            domain
        });
    } catch(err){
        res.status(500).json({
            message: "Internal Server Error",
            statusCode: 500
        })
    }
})
router.patch('/:id', async(req, res)=>{

    let newBookmark = {};
    for (var param in req.body) {
        newBookmark[param] = req.body[param];
    }
    newBookmark.updated_at = Date.now()
    console.log(newBookmark)
    
    try{
        console.log(req.body)
        let result = await Bookmark.updateOne({_id: req.params.id}, newBookmark) // { $set: newBookmark }
        res.json({
            message: "Data Updated Successfully",
            statusCode: 200            
        });
    } catch(err){
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error",
            statusCode: 500
        })
    }
})

module.exports = router;