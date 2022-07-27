// // default parameters

// function sum(a,b,c=0) {
//     console.log(a+b+c);
// }

// sum(2,3,);



// // Rest parameters

// function persons(a, b, ...xyz) {
//   console.log(a);
//   console.log(b);
//   console.log(xyz);
//   console.log(xyz[1]);
//   console.log(xyz.length);
//   xyz.forEach((element) => console.log(element));
// }

// persons("raj", "ram", "siri", "jai", "abhi");




// // Spred parameters

// let arr1 = [3, 4, 5];
// let arr2 = [1, 2, ...arr1, 6, 7, 8, 9];
// console.log(arr2);





// //recusive function

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));







// // function Currying 

// let sum = function (a) {
//   return function (b) {
//     return function (c) {
//       return (a * b * c);
//     };
//   };
// }

// console.log(sum(2)(3)(4));


// // Function currying with arrow function

// let multiply =(a)=>
//                 (b)=>
//                     (c)=> a*b*c;

// console.log( multiply(2)(3)(4));


// // callbacks

// function square(num, callback) {
//   let result = num *num
//   callback(result);
// }

// function print(result) {
//   console.log("the square of 4 = "+result);
// }

// let x = 4;
// square(x, print);





// Highter order functions

// .map(func)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = arr.map(func)


// function func(ele, index, array){return ele*ele}

// console.log(arr2);
// console.log(arr);




// // .filter(func)

// let arr = [1, 2,3, 4, 5, 6, 7, 8];
// let arr2 = arr.filter((ele)=>ele%2==1)
// console.log(arr2);
// console.log(arr);


// // remove duplications in array
// let arr1 = [2, 3, 2, 4];
// let arr2 = arr1.filter((item, index) => {
//   return arr1.indexOf(item) == index;
// });
// console.log(arr2);






// // .reduce(func, initial value)

// let arr = [1, 2,3, 4, 5, 6, 7, 8];
// let arr2 = arr.reduce((acc, ele, index, array)=>{
//   return acc + ele
// }, 0);
// console.log(arr2);



//way 01
// charector count in a string
// let str = "Engineering";
// let result = str.split("").reduce((acc, value) => {
//   if (acc[value]) {
//     acc[value]++;
//   }
//   else {
//     acc[value] = 1;
//   }
//   return acc;
// }, {});

// console.log(result);

//way 02
let str = "Engineering";

let obj={}
let arr = str.split("")

for(let item of arr){
    obj[item] ? obj[item]++ : obj[item]=1
}
console.log(obj);