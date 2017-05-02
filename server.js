var express = require('express');
var multer = require('multer');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var path=require('path');

app.set('port', port); 
// Use Morgan for logging in development mode; should make format an environment variable...
app.use(morgan('dev'));
/* Disk Storage engine of multer gives you full control on storing files to disk. The options are destination (for determining which folder the file should be saved) and filename (name of the file inside the folder) */

var storage = multer.memoryStorage();
var upload = multer({ storage: storage }).single('myfile');

//Showing index.html file on our homepage
app.get('/', function(resuest, response) {
  response.sendFile(path.join(__dirname,'index.html'));
});

//Posting the file upload
app.post('/get-file-size', function(request, response) {
  upload(request, response, function(err) {
  if(err) {
    console.log('Error Occured:'+err);
    return;
  }
  response.send({size: request.file.size});
  })
});

var server = app.listen(port, function () {
  console.log('Listening on port ' + server.address().port)
});