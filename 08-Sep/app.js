var http=require("http")
http.createServer(function(req,res)
{
res.end("Hello Node JS")
}).listen(8080)
console.log("Server Created http://127.0.0.1:8080")