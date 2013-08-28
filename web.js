var express = require('express');
<<<<<<< HEAD
//var app = express();
=======
>>>>>>> dcd95528d4bc715c0a512a7a93f4b784454fbd4b

//OT not sure what this does? 8-7-13
var fs = require('fs');

//OT added for reading in file
var htmlfile = "index.html";

<<<<<<< HEAD
var app = express.createServer(express.logger());

//app.use(express.logger());

=======
//OT commented out these two and replaced with this one
var app = express();
//var app = express.createServer(express.logger());
app.use(express.logger());
>>>>>>> dcd95528d4bc715c0a512a7a93f4b784454fbd4b


app.get('/', function(request, response) {
<<<<<<< HEAD
//  response.send('Hello World 2!');
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});



=======
//OT replaced response send with file
  response.send('Hello World 3!');
//  var html = fs.readFileSync(htmlfile).toString();
//  response.send(html);
    
});

//OT changed ports
>>>>>>> dcd95528d4bc715c0a512a7a93f4b784454fbd4b
var port = process.env.PORT || 5000;
//var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
