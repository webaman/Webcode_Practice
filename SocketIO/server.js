const app = require('express')();
const http = require('http').Server(app);
var ChatModel=require('./model/admin')
const io = require('socket.io')(http);
const port = process.env.PORT || 4000;
var mongoose=require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mydata:mydb%4011@localhost:27017/mydata')
.then(()=>console.log("Connection Established"))
.catch(()=>console.log("Error"))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
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
   
  });
});
app.get('/display', function(req, res, next) {
    ChatModel.find(function(err,data){
      if(err){
        console.log("Error in Fetch Data" + err);
      }else{
          
        //console.log("Record Data is " + data);
        res.render('display',{mydata:data});
      }
    }).lean();
  });

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});