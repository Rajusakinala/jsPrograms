let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    (resolve(10));;
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 500);
  });
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 1000);
    });
  })
  .then((result) => console.log(result));
