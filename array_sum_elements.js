let arr1 = [2, 4, 3];

let arr2 = [];
let len = arr1.length;
for (let i =0; i<len;i++){
        let a= arr1.reduce((x,y)=>x+y)
        arr2.push(a)
        arr1.shift()
    }
console.log(arr2);
