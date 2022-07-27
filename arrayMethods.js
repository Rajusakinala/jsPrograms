// reduce

const numbers = [2, 3, 2, 4];

let x = numbers.reduce((a, b, c) =>{
  console.log(b, c);
  return a
})
console.log(x);
