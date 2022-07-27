// // Promise

// function func(resolve, reject){
//     let condition = true;
//     if (condition){
//         resolve("it is resolved case");
//     } else{reject("it is error case")}
// };
// let p = new Promise(func);

// console.log(p);
// p.then(function () {
//   console.log("first");
// })
//   .then(function () {
//     console.log("second");
//   })
//   .then(function () {
//     console.log("third");
//   });

// p.catch(function (){console.log("rejected");})


// async and await

// async function sum() {
//   return await "hello";
// }

// console.log(sum());





// promise chaining methodes

// let p1 = new Promise.resolve("p1 resolved")
// let p2 = new Promise.resolve("p2 rejected")
// let p3 = new Promise.resolve("p3 resolved")
// Promise.all([p1, p2, p3]).then(function (values){console.log("values");})


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("request solved 1");
  }, 1 * 10);
});


let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("request solved 2");
  }, 1 * 100);
});


let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("request solved 3");
  }, 1 * 500);
});


Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     