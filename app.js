var express = require('express');

var app = express(); // invoke function from require('express')

var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')

var port = process.env.PORT || 3000; // either equal to environment variable or 3000



app.use('/assets', express.static(__dirname + '/public')); // middleware for static files

app.set('view engine', 'ejs'); // will look for folder views

app.use('/', function(req, res, next) { // make your own middleware. when a particular request comes in, run the function
  console.log('Request Url: ' + req.url)
  next()
});


htmlController(app);

apiController(app);

app.listen(port); // combines the createServer and listen in nodejs

