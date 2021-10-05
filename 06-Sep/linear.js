var arr=[2,4,1,5,6];
var i;
var x=7
var flag=1;
for(i=0; i<arr.length; i++)
{
 if(arr[i]==x)
 {
     console.log("Found Element " +x)
     flag=0;
     break;
 }
}
if(flag==1)
{
    console.log("Element Not found");
}