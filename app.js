var express = require('express');
var bodyParser = require('body-parser') // for post request. parse content of http to get it
var app = express(); // invoke function from require('express')

var port = process.env.PORT || 3000; // either equal to environment variable or 3000

var urlencodedParser = bodyParser.urlencoded({extended:false})

var jsonParser = bodyParser.json();

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
  res.render('person', {ID: req.params.id, Qstr: req.query.qstr}); // puts id into the params obj. query object will have the api query string. render will send it to the person view file.
});

app.post('/person', urlencodedParser, function(req, res) {
  res.send('Thank you!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
  res.send('Thank you for the json data');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

// restful api example

app.post('/api/person', jsonParser, function(req, res) {
  //save to database
});

app.get('/api/person/:id', function(req, res) {
  //get data from database
});

app.delete('/api/person/:id', function(req, res) {
  //delete from database
});

app.listen(port); // combines the createServer and listen in nodejs

