// let arr1 = [3, 2, 3, 4, 5, 3, 2, 4, 5, 3, 2, 5];

// arr1.sort((a,b)=>{return a-b});
// console.log(arr1)

// let arr3 = [];

// let obj = arr1.reduce(function (acc,ele, i, arr){
//     if (acc[ele]){
//         acc[ele]++
//     }else{
//         acc[ele] = 1;
//     }
//     return acc
// }, {})


// let a = Object.keys(obj)
// let b = Object.values(obj)

// for (let i in b){
//     if (a[i]>3){
//         for(let j = 0; j<3; j++){
//             arr3.push(a[i])
//         }
        
//     }
//     else{
//         for(let j = 0; j<2; j++){

//         arr3.push(a[i])
//         }
//     }


// }

// console.log(arr3);













// new question




// nagendra int question
Number.prototype.plus = function (b) {
  return this + b;
};

Number.prototype.minus = function (b) {
  return this - b;
};

var a = (5).plus(3).minus(6); // 2

console.log(a);