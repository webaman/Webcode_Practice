exports.add=function(arr)
{
    var len=arr.length;
    var mul;
    for(var i=0; i<len; i++)
    {
       for(j=1; j<=10; j++)
       {
           mul=arr[i]*j;
           console.log(mul);
       }
       console.log("\n")
    }
}
