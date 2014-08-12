var express = require('express');
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/'));
//app.get('/', function(request, response) {
//  response.send('Hello First World! from web.js');
//});

var port = process.env.PORT;
app.listen(port, function() {
  console.log("Listening on " + port);
});