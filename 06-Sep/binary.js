var n=9;
var reverse=0;
var rem;
var i;
var arr=[];
var j=0;
while(n>0)
{
    rem=n%2;    
     arr[j]=rem;    
     n=Math.floor(n/2);
     j++;
    

}

for(i=j-1; i>=0; i--)
{
    console.log(arr[i]);
}
