var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;
  mongoose = require('mongoose'),
  News = require('./api/models/News'),
  bodyParser = require('body-parser');
  config = require('config')

mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/Routes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);