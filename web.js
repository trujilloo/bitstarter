var express = require('express');
//var app = express();

//OT not sure what this does? 8-7-13
var fs = require('fs');

//OT added for reading in file
var htmlfile = "index.html";

var app = express.createServer(express.logger());

//app.use(express.logger());

//OT commented out these two and replaced with this one
var app = express();
//var app = express.createServer(express.logger());
app.use(express.logger());



app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

//OT changed ports
var port = process.env.PORT || 5000;
//var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
