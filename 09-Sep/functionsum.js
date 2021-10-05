function sum(x=3,y=2)
{
    return x+y;
}
console.log(sum(3,7))
console.log(sum())


function sum1(x=2,y=x,z=x+2)
{
    console.log(x+y+z);
}
sum1();