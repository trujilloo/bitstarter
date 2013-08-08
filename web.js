var express = require('express');

//OT not sure what this does? 8-7-13
var fs = require('fs');

//OT added for reading in file
var htmlfile = "index.html";

//OT commented out these two and replaced with this one
//var app = express();
var app = express.createServer(express.logger());
//app.use(express.logger());


app.get('/', function(request, response) {
//OT replaced response send with file
//  response.send('Hello World!');
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
    
});

//OT changed ports
//var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
