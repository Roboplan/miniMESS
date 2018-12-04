global.dataFolder = __dirname + '/data';

var express = require('express');
var app = express();
var port = 8080;
var hostname = "0.0.0.0";
var bodyParser = require('body-parser');

//const fs = require('fs');
//const path = require('path');

//const walkDirSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkDirSync(path.join(d, f))) : d;

//console.log(walkDirSync(dataFolder));

  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

var routes = require('./api/routes/partsRoutes'); //importing route
routes(app); //register the route

app.listen(port, hostname);

console.log('miniMESS RESTful API server started on: ' + hostname + '/' + port);
