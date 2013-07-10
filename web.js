var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());
var message = ""

fs.readFileSync('__dirname/index.html', 'utf8', function (err, data) {
  if (err) throw err;
  message = data.toString();
});

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
