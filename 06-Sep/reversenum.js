var n=123;
var reverse=0;
var rem;

while(n>0)
{
    rem=n%10;    
     reverse=reverse*10+rem;    
     n=Math.floor(n/10);
    

}

console.log(reverse)