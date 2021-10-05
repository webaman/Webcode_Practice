var fs = require('fs');

fs.writeFile('am.txt', 'Hello This is Aman', function (err) {
  if (err) throw err;
  console.log('Written Something!');
});
