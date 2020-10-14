const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookmarkSchema = new Schema({
    "category" : String,
    "url" : String,
    "notes" : String,
    "domain" : String,
    "status" : Boolean,
    "created_at": Date,
    "updated_at": Date
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
