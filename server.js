'use strict';

var express = require('express');
var multer = require('multer');
var path = require('path');
var morgan = require('morgan');

var app = express();
var upload = multer({ dest: 'uploads/' })

var port = process.env.PORT || 8080;
// Use Morgan for logging in development mode; should make format an environment variable...
app.use(morgan('dev'));
// setup a static route to index.html in the public directory: this will contain the form, eventually.
app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/upload/file', function (req, res) {
  console.log('Uploading....');
  console.log(req.body);
  console.log(req.files);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send('Hi there');
});
// need to set port dynamically for Heroku ....
app.listen(port, function() {
  console.log('File metadata app listening on port ', + port +'!');
})
