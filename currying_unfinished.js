let arr = [2, 3, 2, 4];
let arr1 = arr.sort()
let arr2 = [];
arr2.push(arr1[0]);

arr1.forEach(a=>{
            let p = arr2.forEach(b => b)
            let s = (a!==p)
            if(s){
                arr2.push(a);
            }
})
console.log(arr2);

