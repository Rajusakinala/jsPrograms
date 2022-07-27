let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("request solved");
  }, 1 * 1000);
  setTimeout(() => {
    reject("request solved");
  }, 1 * 1000);
 
});



p.then((result) => {console.log(result)
                    return " first"}).then((result=>console.log(result)));
p.catch((result) => console.log(" it resukts an error"));



//