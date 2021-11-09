var i;
var result=0;
var n=1234;
// var arr=[0]
var digit;
while( n ){
    digit = n % 10  
    result = (result * 10) + digit  
    n = n/10|0  
}  

console.log(result) 
// console.log(c)

// var num=0
// let arr = [1,2,9]
//  num = +arr.join("")
// var sum=num+1;

// const arrayOfDigits = Array.from(String(sum), Number);

//  console.log(arrayOfDigits);

