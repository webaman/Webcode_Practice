
var small;
var greater;
var arr=[3,4,6,2,1];

small=arr[0];
greater=arr[0];
for(var i=0; i<arr.length; i++)
{
    if(arr[i]<small)
    {
        small=arr[i];
    }
}
for(var i=0; i<arr.length; i++)
{
    if(arr[i]>greater)
    {
        greater=arr[i];
    }
}
console.log("Smaller Value is " + small)
console.log("Greater Value is " + greater)