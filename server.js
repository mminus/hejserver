var http = require('http');

var server = http.createServer(function(request, response) {
  response.write('Halloj!');
  response.end();
});

server.listen(3000);
