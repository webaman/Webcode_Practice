var fs = require('fs');

fs.appendFile('am.txt', ' I Like to Watch Webseries', function (err) {
  if (err) throw err;
  console.log('Append Something!');
});
