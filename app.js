var express = require('express');
var app = express(); // invoke function from require('express')

var port = process.env.PORT || 3000; // either equal to environment variable or 3000

app.use('/assets', express.static(__dirname + '/public')); // middleware for static files

app.set('view engine', 'ejs'); // will look for folder views

app.use('/', function(req, res, next) { // make your own middleware. when a particular request comes in, run the function
  console.log('Request Url: ' + req.url)
  next()
});

app.get('/', function(req, res) { // if GET method was requested on the url '/' (routes)
  res.render('index') // look at index file in the view folder
});

app.get('/api', function(req, res) { // if GET method was requested on the url '/api'
  res.json({firstname: 'John', lastname: 'Doe'})
});

app.get('/person/:id', function(req, res) { // :id is a variable name
  res.render('person', {ID: req.params.id}); // puts id into the params obj. render will send it to the person view file.
});

app.listen(port); // combines the createServer and listen in nodejs

