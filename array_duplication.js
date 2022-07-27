// 1st way:


// let arr1 = [2, 3, 2, 4];

// let arr2 = [];
// arr1.forEach((a) => {
//   let flag = true;

//   for (let i of arr2) {
//     if (i == a) {
//       flag = false;
//       break;
//     }
//   }

//   if (flag) {
//     arr2.push(a);
//   }
// });
// console.log(arr2);


// 2nd way:


// let arr1 = [2, 3, 2, 4];
// let arr2 = [];
// arr1.forEach((item) => {
//   let a = arr1.indexOf(item);
//   let b = arr1.lastIndexOf(item);
//   if (a == b){
//     arr2.push(item)
//   } 
// });

// console.log(arr2);



// 3rd way


// let arr1 = [2, 3, 2, 4];
// let arr2 = arr1.filter((item,index) =>{
//   return arr1.indexOf(item) == index
// })
// console.log(arr2);


let arr1 = [2, 3, 2, 4];
// arr1.forEach((item, index, array)=>{
//   if(arr1.indexOf(item)==index){
//     arr2.push(item)
//   }
// })
// console.log(arr2);

let arr2=arr1.filter((ele)=>!arr2.includes(ele))

console.log(arr2);




