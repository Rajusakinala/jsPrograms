const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject("Failed");
  }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});


p3.then((value)=>console.log("value"));