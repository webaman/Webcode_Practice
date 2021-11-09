// var arr=[1];

// var i,j;
// var store;
// var flag;
// for(i=0; i<arr.length; i++)
// {
//     flag=0;
//     for(j=0; j<arr.length; j++)
//     {
//         if(i!=j && arr[i]==arr[j])
//         {
//          flag=1;
//          break;
//         }
//     }
//     if(flag==0)
//     {
//         console.log(arr[i])
//         break;
//     }
    

// }

/* second way */


// var arr=[4,1,2,1,2];
// var store=0
// var i,j;
// var store;
// for (let x in arr) {
//   store ^= arr[x];
//   }
//   console.log(store)
  
/* third way */

// function removeDuplicates(array) {
//     const result = [];
//     const map = {};
  
//     for (let i = 0; i < array.length; i++) {
//       if (map[array[i]]) {
          
//     continue
//       } else {
//         result.push(array[i]);
//         map[array[i]] = true;
//       }
//     }
//     return result;
//   }

//   const a = [1,1,2,3,3,4,4,5,5];

// console.log(removeDuplicates(a))
// const firstnonrepeat = (arr) => {
//     let map = new Map()
//     for (let item of arr) {
//       if (map.has(item)) {
//         map.set(item, map.get(item) + 1);
//       } else {
//         map.set(item, 1);
//       }
//     }
//     for (let [key, value] of map.entries()) {
//       if (value === 1) {
//         return key;
//       }
//     }   
//   }
//   console.log(firstnonrepeat([4,1,2,1,2,0]));



// JavaScript program to remove
// the duplicates from the array.

// function removeDups(arr,n)
// {
	
//     var count=0;
// 		let mp = new Map();

// 		for (let i = 0; i < n; ++i)
// 		{

// 			if (mp.get(arr[i]) == null)
//             {
//                 count++;
// 				console.log(arr[i] + " " + count );
//             }   
//             else
//             {
//                 count=0;
//             }
// 			mp.set(arr[i], true);
// 		}
// }

// // Driver Code
// let arr=[4,1,2,1,2 ];
// let n = arr.length;
// removeDups(arr, n);

// const arr = [1,2,1,2]
// const counts = {};
// var flag=0;
// var val=2;
// arr.forEach((x) => {
//   counts[x] = (counts[x] || 0) + 1;
// });
// var a=Object.keys(counts)
// var b=Object.values(counts)
// for(i=0; i<a.length; i++)
// {
//     if(val==Object.keys(counts)[i])
//     {
//         console.log(Object.values(counts)[i])
//         flag=1;
//         break;
//     }
    
// }
// if(flag==0)
// {
// console.log("Element Not Found")
// }
const arr = [2,2,2,1,3,3,5]
const counts = {};
var flag=0;
var val=3;
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
var a=Object.keys(counts)
var b=Object.values(counts)
// console.log(a);
// console.log(b);
for(i=0; i<a.length; i++)
{
    if(Object.values(counts)[i]==val)
    {
        console.log(Object.keys(counts)[i])
        flag=1;
    }
    
}
if(flag==0)
{
console.log("Nothing Element is First Repeated")
}