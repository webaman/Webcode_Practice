let sum = () => 23


const cal=function(x=2,y=x+sum())
{
console.log(x+y)
}

cal();


let calc=(x=3,y=2+sum())=>
{
    console.log(x+y)
}
calc();