var arr1=[];
var j=0;
var temp=[];
var temp1=[];
var i;
var arr=["Shubham","Heena","Mahima","Rahul","Aman"]

for(i=0; i<arr.length; i++)
{
    arr1[j]=arr[i].charAt(0);
    j++;
}
for(i=0; i<arr.length; i++)
{
    for(k=0; k<=(arr.length-i)-1; k++)
    {
      if(arr1[k]>arr1[k+1])
      {
          temp[k]=arr1[k];
          arr1[k]=arr1[k+1];
          arr1[k+1]=temp[k];

          temp1[k]=arr[k]
          arr[k]=arr[k+1];
          arr[k+1]=temp1[k];
      } 
    }
}
for(i=0; i<arr.length; i++)
{
   console.log(arr[i])
}