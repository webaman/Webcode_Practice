var EventEmitter=require('events')



var event=new EventEmitter();



function loop(num)
{
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            event.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            event.emit('AfterProcess', i);
        }
    }
    , 2000)
    
    return event;

}


var l=loop(5);


l.on('BeforeProcess', (i)=>
{
console.log(`No is ${i}`)
})

l.on('AfterProcess', (i)=>
{
console.log(`Increment No is ${i}`)
})