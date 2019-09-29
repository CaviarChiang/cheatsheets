const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      Task = require('./api/models/todoListModel'),
      routes = require('./api/routes/todoListRoutes'),
      app = express(),
      port = process.env.PORT || 3000;


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// register routes
app.get('/', function(req, res) {
  res.send("Hi Kyle");
});
routes(app);


// use middlewares
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);
console.log('Todo list RESTful API server started on: ' + port);

