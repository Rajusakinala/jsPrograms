let str = "abcdef";
let b = 2;
let arr = [];
for (let i = 0; i < str.length-1; i=i+2){
    
    arr.push(str.substr(i, b));

}

if (str.length % 2 != 0) {
    let z = str.substr(str.length-1, 1)+ "_"
    arr.push(z)
}

console.log(arr);

