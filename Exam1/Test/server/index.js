//var http = require('http');
var express = require('express');
config = require('./config/config');
var app = express();

//var port = process.env.port || 3000

require('./config/express')(app, config);
console.log("Creating HTTP server on port: " + config.port);
require('http').createServer(app).listen(config.port, function () {
console.log("HTTP Server listening on port: " + config.port + ", in " + app.get('env') + "mode");
});


//require('http').createServer(app).listen(port, function (){
//    console.log('info', "HTTP Server listening on port: %s, in %s mode" , port, app.get('env'));
//})

//app.use(function(req, res){
//console.log('Request from ' + req.ip);
//});


//app.get('/', function(req,res){
//    res.send('Hello World!');
//});


//app.use(function(req,res){
//    res.type('text/plan');
//    res.status(404);
//    res.send('404 Not Found');
//});


//app.use(function(err, req, res, next){
//console.error(err.stack);
//res.type('text/plan');
//res.status(500);
//res.send('500 Server Error');
//});


//http.createServer(app).listen(3000, function(){
//console.log('Express server listening on port ' + 3000);
//})

