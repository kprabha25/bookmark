
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  ------------
  // Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

--------------
<input type="file" name="picture" />


handleFileUpload: function(req) {
    if(!req.files || !req.files.picture || !req.files.picture.name) {
        return req.body.currentPicture || '';
    }
    var data = fs.readFileSync(req.files.picture.path);
    var fileName = req.files.picture.name;
    var uid = crypto.randomBytes(10).toString('hex');
    var dir = __dirname + "/../public/uploads/" + uid;
    fs.mkdirSync(dir, '0777');
    fs.writeFileSync(dir + "/" + fileName, data);
    return '/uploads/' + uid + "/" + fileName;
}
-------
Which HTTP method should we use?
When constructing a REST API each HTTP method corresponds to an action against a resource served by the API.
GET — retrieve a particular resource’s object or list all objects
POST — create a new resource’s object
PATCH — make a partial update to a particular resource’s object
PUT — completely overwrite a particular resource’s object
DELETE — remove a particular resource’s object
https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6

Following are the APIs we created
GET http://localhost:5000/bookmark (To get all bookmark)
POST http://localhost:5000/bookmark (To create a new bookmarkt)
{
    "category": "MongoDB",
    "url": "www.sitepoint.com",
    "notes": "About Angular",
    "domain": "sitepoint",
    "status": true
}

GET http://localhost:5000/bookmark/:id (To get a specific bookmark)
GET Ex : http://localhost:5000/bookmark/5f86a1cf00b887cce649c6a5

DELETE http://localhost:5000/bookmark/:id (To delete a specific bookmark)
DELETE Ex : http://localhost:5000/bookmark/5f86e8024887fe0e60336a1d

PATCH http://localhost:5000/bookmark/:id (To update a specific bookmark)
PATCH Ex : http://localhost:5000/bookmark/5f86a1cf00b887cce649c6a5
{
    "category": "Java"
}
