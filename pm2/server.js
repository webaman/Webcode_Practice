var http=require('http')
http.createServer(function(req,res)
{
res.end("Hello Node Js")
}).listen(4000)

console.log("Server Started http://127.0.0.1:4000")