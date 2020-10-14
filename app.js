var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var sassMiddleware = require('node-sass-middleware');

// importing files
const indexRouter = require('./routes/index');
const bookmarkRouter = require('./routes/bookmarks');

// Define Global Variables
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080; // Step 1

// Step 2
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/bookmark', { 
  useNewUrlParser : true, 
  useFindAndModify: false, 
  useUnifiedTopology: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = . Sass and false = . scss
    sourceMap: true
}));

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', indexRouter);
app.use('/bookmark', bookmarkRouter);

module.exports = app;