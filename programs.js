// // 12. Largest among three numbers
// let a = 10, b = 20, c =30;
// if (a>b>c){
//     console.log("a is greatest number");
// }
// else if (b > c) {
//   console.log("b is greatest number");
// }
// else {
//   console.log("c is greatest number");
// }

// console.log(Math.max(23, 43,29));
// console.log(Math.min(23, 43,29));

// // print all prime numbers in an specified  range

// let min = 1, max = 100;
// for (let nums = min; nums <= max; nums++){
//     let count = 0
//     for (let i = 2; i < nums; i++){
//         if (nums%i==0) {
//             count = 1;
//             break;
//         }
//     }
//     if (nums >1 && count == 0) {
//         console.log(nums);
//     };
// };

// // finding factorial

// let number = 5;
// function factorial(number) {
//     if (number === 1){return 1}
//     else{
//         return number* factorial(number-1)
//     }
// }

// console.log(factorial(5));

// //JS program to print fibonacci series
// let a= 0, b = 1;
// for (let i = 0; i < 5; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }

// // checking whether numbers amstrong or not
// let a = 123;
// let [b, c, d] =a.toString().split("")
// if ((b**3)+(c**3)+(d**3)==a){
//     console.log("number is amstrong");
// }
// else{console.log("number is not amstrong"); }

// // 32 ASCII VALUE OF CHERECTOR OR NUMERICAL
// let a= "S";
// console.log(a.charCodeAt(0));

// 33. Palindrome or not
// let a = 1441;
// let b= a.toString();
// flage = false;
// for(let i = 0; i <b.length-1; i++){
//     if(b[i] !=b[b.length-1-i]){
//         flage = true;
//         break;
//     }
// }
// if(flage){
//     console.log("number is not a palindrom");
// }
// else{console.log("number is a palindrom"); }

// // 34.word sorting
// let arr = ["ram", "siri", "abhi"]
// console.log(arr.sort());

// // 35. replace charector of string
// let a = 'Ramu';
// console.log(a.replace("u", "a"));

// // 40. counting the vowels in string
// let a = "engineering";
// let b = a.toString();
// let count = 0;
// for (let index = 0; index<b.length; index++){
//     if ((b[index]=="a") || (b[index]=="e") ||(b[index]=="i") ||(b[index]=="o") ||(b[index]=="u")){
//         count += 1;
//     }
// }
// console.log(count);

// // 45. loop through an object
// const obj = {
//     name: "raju",
//     age: 25,
//     program: "full stack"
// }
// for (let item in obj){
//     console.log(obj[item]);
// }

// 61. display date time
// console.log(new Date());
// console.log(new Date('jan 13 1996'));
// console.log(new Date('1996-Jan-13'));
// console.log(new Date('1996 13 Jan 11:10:09:444'));

// // 62. program for leap year.
// let year = 1900;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//       if(year%400 == 0){
//         console.log("leap year");
//       }
//       else(console.log("not a leap year"));
//   } else {
//     console.log("current year is a leap year");
//   }
// } else {
//   console.log("current year is not a leap year");
// };

// // 63 and 64. date farmating
// let x = new Date();
// console.log(x.toDateString());
// console.log(`Today is ${x.getDate()}th ${x.getMonth()}nd Month ${x.getFullYear()} year, Time is ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}.`);

// // 65. comparing two dates
// let date1 = new Date();
// let date2 = new Date("2023 jan 13");
// if ((date1 > date2)){
//     console.log("first year is older then second year");
// }
// else{
//     console.log("second year is older then first year");

// }

// 76.Object value sorting using Array

// const obj = {
//     mobile3: 10,
//     mobile2: 20,
//     mobile4: 50,
//     mobile1: 15,
// }

// let arr = Object.keys(obj)
// let sortArray = arr.sort();
// console.log(sortArray);

// // for(let k = 1; k<sortArray.length; k++){
// //     console.log(obj.sortArray[k]);
// // }
// console.log((obj.mobile2));

// // 82. splitting array

// let arr = [23, "ram", 8, 87, "siri", "IP"];
// let a = 0
// for(let i = 2; i<arr.length+1; i=i+2){
//     let s = arr.slice(a, i);
//     console.log(s);
//     a = i;
// }

// // 79. array element comparision

// let arr1 = ["a", "b", "c"];
// let arr2 = ["a", "b", "c"];
// if (arr1.length===arr2.length){
//     for (let i = 0; i< arr1.length; i++){
//       if(arr1[i]==arr2[i]){
//           console.log("same elements");
//           break;
//       }
//       else{
//           console.log("not same");
//           break;
//       }

//     }
// }
// else{
//     console.log("no same elements");
// }

// // 90. Email validation
// let mail = "sakinala.raju1@gmail.com";
// let end = "@gmail.com";
// let result = mail.endsWith(end);

// if(result){
// console.log("given mail is valid")
// }
// else{
//     console.log("not a valid mail");
// }

// 93.Time functions

// function a() {
//     console.log('Hello world');
// }
// setTimeout(a, 1000);
// setInterval(a, 500);

// // // 96. Stack
// let arr = [];
// arr.push(9)
// arr.push(8)
// arr.push(1)
// arr.push(0)
// arr.push(2)
// arr.push(9)
// arr.push(2)
// console.log(arr);
// arr.pop()
// arr.pop()
// console.log(arr);

// // 97. queue
// let arr1 = [];
// arr1.push(9);
// arr1.push(8);
// arr1.push(1);
// arr1.push(0);
// arr1.push(2);
// arr1.push(9);
// arr1.push(2);
// arr1.shift();
// arr1.shift();
// console.log(arr1);

// 74. program to sort array by property name and value

// const person = [{ name: "raju", age: 25 }, { name: "abhi", age: 24 }, { name: "vikram", age: 28 }];
// console.log(person.sort((a, b) => a.age - b.age));

// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// console.log(countDownDate);

// Array pair sum match

// let arr = [4, 5, 3, 4, 7, 9];
// let sum = 8;
// for (let i = 0; i < arr.length - 1; i++) {
//     let a = arr[i] + arr[i + 1];
//     if (a == sum) {
//       console.log(arr.slice(i, i + 2));
//     }
// }

// let arr = [4, 5, 3, 4, 7, 9];
// let sum = 8;
// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         let arr2 = [];
//         let a = arr[i] + arr[j];
//         if (a == 8) {
//             arr2.push(arr[i])
//             arr2.push(arr[j])
//             console.log(arr2);
//         }
//     }
// }

// let obj = {
//   a: 1,
//   b: 2,
//   c: [3, 4, 5],
// };

// // function print(obj) {
// //   for (let element of Object.values(obj)) {
// //     if (typeof element === "number") {
// //       console.log(element);
// //     } else if (typeof element === "object") {
// //       print(element);
// //     }
// //   }
// // }
// // print(obj);

// console.log(Object.values(obj.c));

// let arr = [1, 3, 5];
// let arr2 = [].concat(arr);
// arr2.pop();
// console.log(arr, arr2);

// let arr = [1, 2, 3, [5, 6, [2, 5, 7], 8], 9];

// function print(arr){
//     for(let item of arr){
//         if (typeof item === 'number'){
//             console.log(item);
//         }
//         else if (Array.isArray(item)){
//             print(item)
//         }

// }
// }

// print(arr)




// removing duplicates in array 
let arr = [1, 2, 3, 2, 4]
let a = new Set(arr.sort((a,b)=>{return a-b}));
console.log(a)
