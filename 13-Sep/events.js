var EventEmitter=require("events")

var event=new EventEmitter();




event.on('Hi', (msg) =>
{
    console.log(`Hi I am Aman and ${msg}`)
})


event.emit("Hi");