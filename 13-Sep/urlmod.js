var url = require('url');
var address = 'https://www.youtube.com/watch?v=qRFrO6eeh2s&list=RDqRFrO6eeh2s&start_radio=1&artist=Gajendra Verma&song=Mann Mera';
var q = url.parse(address,true);
console.log(q.host); 
console.log(q.pathname); 
console.log(q.search); 
var data = q.query; 
console.log(data.artist); 
console.log(data.song);  