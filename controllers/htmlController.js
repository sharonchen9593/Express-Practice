var bodyParser = require('body-parser') // for post request. parse content of http to get it

var urlencodedParser = bodyParser.urlencoded({extended:false})

var jsonParser = bodyParser.json();

module.exports = function(app) {
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
}