var fs = require('fs');
fs.readFile("am.txt","base64", function (err, data) {
if (err) throw err;
console.log(data);
});

var fs = require('fs');
fs.readFile("am.txt","utf-8", function (err, data) {
if (err) throw err;
console.log(data);
});
