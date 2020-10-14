const express = require('express');
const router = express.Router();
const { isEmpty } = require('lodash');

const Bookmark = require('../src/models/bookmark');

//To get all bookmar
router.get("/", (req, res)=> {
    Bookmark.find()
        .then((resp)=>{ res.status(200).json(resp) })
        .catch((err)=>{ res.status(400).json( { message: "Request Failed",statusCode: 400 } )
    })
})

//To Create a new Bookmark
router.post("/", (req, res)=> {
    if(isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body Should not be empty',
            statusCode: 403
        })
    }    
    const { category,url,notes,domain,status,created_at,updated_at } = req.body;
    const newbookmark = new Bookmark({ category,url,notes,domain,status,created_at,updated_at });
    newbookmark.save()
        .then((resp)=>{ res.status(201).json(resp) })
        .catch((err)=>{ res.status(400).json( { message: "Request Failed",statusCode: 400 } )
    })
})

//To Delete a specific Bookmark
router.delete("/:id", (req, res)=> {
    if(isEmpty(req.params.id)) {
        return res.status(403).json({
            message: 'Id Should not be empty',
            statusCode: 403
        })
    } 
    console.log(req.params.id)
    Bookmark.remove({_id: req.params.id})
        .then((resp)=>{ res.status(200).json(resp) })
        .catch((err)=>{ res.status(400).json( { message: "Request Failed",statusCode: 400 } )
    })
})

//To Delete multiple Bookmark
router.post("/delete", (req, res)=> {
    Bookmark.deleteMany({_id: list, list: {$in: req.body.list}})
        .then((resp)=>{ res.status(200).json(resp) })
        .catch((err)=>{ res.status(400).json( { message: "Request Failed",statusCode: 400 } )
    })
})

//To Get specific Bookmark
router.get("/:id", (req, res)=> {
    Bookmark.findById(req.params.id)
        .then((resp)=>{ res.status(200).json(resp) })
        .catch((err)=>{ res.status(400).json( { message: "Request Failed",statusCode: 400 } )
    })
})

//To update specific Bookmark
router.patch("/:id", (req, res)=> {
    console.log(req.body)
    Bookmark.updateOne({_id: req.params.id}, {$set: req.body})
        .then((resp)=>{ res.status(200).json(resp) })
        .catch((err)=>{ res.status(400).json( { message: "Request Failed",statusCode: 400 } )
    })
})

module.exports = router;