'use strict';

var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;
// setup a static route to index.html in the public directory: this will contain the form, eventually.
app.use('/', express.static(path.join(__dirname, 'public')));

// need to set port dynamically for Heroku ....
app.listen(port, function() {
  console.log('Image search app listening on port ', + port +'!');
})
