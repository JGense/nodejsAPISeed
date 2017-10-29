// Appel du fichier de configuration
const conf = require('./config.json');

// Appel des modules nécéssaires
var express = require('express'),
app = express(),
mongoose = require('mongoose');
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(conf.datasource.url);

app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());

Task = require('./api/models/todoListModel');

var routes = require('./api/routes/todoListRoutes');
routes(app); // register the routes

// Middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found !'});
});

port = process.env.PORT || conf.server.port;
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);