var path = require("path"); 

console.log(path.normalize('Users/Aman/../amfile')) 
 
 console.log('joint path : ' + path.join(__dirname,'/test', 'webcode', 'node/am', 'tab', '..')); 
 
 console.log('resolve : ' + path.resolve('am.js')); 

 console.log('ext name: ' + path.extname('am.js'));

 
 console.log(path.format({ dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }))
 console.log(path.isAbsolute('/test/am.js'));

 var filename = path.basename('/Users/Refsnes/demo_path/am');
console.log(filename);