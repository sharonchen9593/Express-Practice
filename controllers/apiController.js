module.exports = function(app) {

  // restful api example

  app.post('/api/person', function(req, res) {
    //save to database
  });

  app.get('/api/person/:id', function(req, res) {
    //get data from database
  });

  app.delete('/api/person/:id', function(req, res) {
    //delete from database
  });
}