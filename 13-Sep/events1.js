var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('scream', (msg) =>
{
    console.log(`Hello Aman ${msg}`)
});

eventEmitter.emit('scream','I am From Indore');