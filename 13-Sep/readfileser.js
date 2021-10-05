var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
fs.readFile('writedemo.js', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(3000);
console.log("Server Started ");

console.log(__filename)

console.log(__dirname)
