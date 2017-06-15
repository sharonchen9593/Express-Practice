var express = require('express');
var app = express(); // invoke function from require('express')

var port = process.env.PORT || 3000; // either equal to environment variable or 3000

app.use('/assets', express.static(__dirname + '/public')); // middleware for static files

app.get('/', function(req, res) { // if GET method was requested on the url '/' (routes)
  res.send("<html><head><link href='assets/style.css' type='text/css' rel='stylesheet'/></head><body><h1>Hello World</h1></body></html>")
});

app.get('/api', function(req, res) { // if GET method was requested on the url '/api'
  res.json({firstname: 'John', lastname: 'Doe'})
});

app.get('/person/:id', function(req, res) { // :id is a variable name
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>') // puts id into the params obj
});

app.listen(port); // combines the createServer and listen in nodejs

