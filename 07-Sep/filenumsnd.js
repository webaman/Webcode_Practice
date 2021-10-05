exports.rev=function(n)
{
    var c=0,d;
    
    while(n>0)
    {
        d=n%10;
        c=c*10+d;
        n=Math.floor(n/10);
    }
    console.log("Reverse Number is " +c)
}