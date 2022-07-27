// setInterval()

let count = 0;
let obj = setInterval(func, 100);
function func() {
  console.log(count);
  count++;
  if (count == 10) {
    clearInterval(obj);
  }
}



// setTimeout()

setTimeout(function () {console.log("hello");}, 2000);


