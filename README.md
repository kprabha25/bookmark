# bookmark
This is a Demo Bookmark App

"scripts": {
    "start": "node ./bin/www"
  },
  npm install --save-dev nodemon
  nodemon --inspect ./server.js 80
  nodemon ./server.js localhost 8080
  nodemon --watch app --watch libs app/server.js
  nodemon -e js,pug
  nodemon --ignore lib/ --ignore tests/
  nodemon --ignore lib/app.js
  nodemon --ignore 'lib/*.js'