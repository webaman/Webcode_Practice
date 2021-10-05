var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('filenumsnd.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8081);
console.log("Read file")