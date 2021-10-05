var fs = require('fs');
fs.writeFile('am1.txt', 'Hello Aman', function (err) {
if (err) throw err;
console.log('File Created!');
});
