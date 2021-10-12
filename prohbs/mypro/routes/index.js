const { Router } = require('express');
const express = require('express');
var ChatModel=require('../model/chats')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var mongoose=require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mydata:mydb%4011@localhost:27017/mydata')
.then(()=>console.log("Connection Established"))
.catch(()=>console.log("Error"))
app.get('/', (req, res) => {
  res.render('index.hbs')
});

io.on('connection', (socket) => {


  ChatModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{

  //console.log("Record Data is " + data);
  socket.emit('output-messages', data)
  console.log("aman",data);
}
}).lean();



  socket.on('chat message', (msg) => {
    const mybodydata = {
      chat_msg : msg,
      
      
    }
    var data = ChatModel(mybodydata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        io.emit('chat message', msg);
      }
    })
      
      console.log('message: ' + msg);
  });
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');

  socket.on('disconnect', () => {
    console.log('user disconnected');

  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});





module.exports=Router;