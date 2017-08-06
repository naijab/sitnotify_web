var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;
  mongoose = require('mongoose'),
  News = require('./api/models/newsModel'),
  bodyParser = require('body-parser');
  // config = require('./config')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sigmadrivedb:KaHfiVrkqKBjdbnvRY97TncDuKRocBgrUPcGbd4SApZmJYNXVkoSwFrbj6lwemrM99wTf45dgsV9zLd8bh4phw==@sigmadrivedb.documents.azure.com:10255/?ssl=true'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/newsRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);