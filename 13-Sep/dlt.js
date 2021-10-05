var fs = require('fs');
fs.unlink('a1.txt', function (err) {
if (err) throw err;
console.log('File Deleted!');
});
