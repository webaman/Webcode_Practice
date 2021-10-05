var http=require('http')

http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"})
  var arr=[10,5,4,3,1]
  var i;
  var sum=0;
 if(req.url =="/")
 {
    for(i=0; i<arr.length; i++)
    {
        if(arr[i]%2==0)
        {
           res.write(JSON.stringify(arr[i])+ "<br>");
        }
        // console.log(res)
        
    }
    res.end();
 }
 else
 if(req.url =="/sum")
 {
    for(i=0; i<arr.length; i++)
    {
        if(arr[i]%2==0)
        {
           sum=sum+arr[i];
        }
        // console.log(res)
        
    }
    res.end("Sum of element is " +sum)
 }


}).listen(3000)
    
console.log("Server Started")


// var http=require('http')

// http.createServer(function(req,res)
// {
//     res.writeHead(200,{"Content-Type":"text/html"})
// res.end("Data insert")
// }).listen(3000)
// console.log("object")

