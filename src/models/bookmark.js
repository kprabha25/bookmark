const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookmarkSchema = new Schema({
    "category" : String,
    "url" : String,
    "notes" : String,
    "domain" : String,
    "status" : Boolean
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
