// 1st way:

// let arr1 = [2, 3, 2, 4];
// let arr2 = [];
// arr1.forEach((item) => {
//   let a = arr1.indexOf(item);
//   let b = arr1.lastIndexOf(item);
//   if (a == b){
//     arr2.push(item)
//   }
// });



// 2nd way:

let arr1 = [2, 3, 2, 4];

let arr2 = arr1.filter((item) => {
  return arr1.indexOf(item) == arr1.lastIndexOf(item);
});
console.log(arr2);