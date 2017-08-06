var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;
  mongoose = require('mongoose'),
  News = require('./api/models/newsModel'),
  bodyParser = require('body-parser'),
  config = require('./config.js');


mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/newsRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);