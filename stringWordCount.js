// // way 01
// let str = "abbacd";
// let obj = {}
// let arr = str.split("")
// for ( let i = 0; i< arr.length; i++){
//     if(obj[arr[i]]){
//         obj[arr[i]] ++;
//     }
//     else{
//         obj[arr[i]] = 1;
//     }
// }
// console.log(obj)


// // way 02
let str = "Engineering";
let result = str.split("").reduce((acc, value)=>
{if (acc[value]){
    acc[value]++
}
else{
    acc[value] = 1;
}
return acc
}
,{})

console.log(result);



// //Tesla quastion

// let str = "example";
// let finalArr = [];
// let z= 0;
// let arr = str.split("").sort();
// var newArr = arr.filter((item, index, arr) => arr.indexOf(item) == index);
// for (let i = 0; i<newArr.length; i++){
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//     if(newArr[i]==arr[j]){count++}
//     }
//     console.log(newArr[i]+"="+count);
//     function recurssive(count){
//         if(finalArr.includes(count)){
//             count--
//             z++
//             recurssive(count)

//         }else if (count>0){
//             finalArr.push(count)
//         }

//     }
//     recurssive(count);
// }
// console.log(finalArr);
// console.log(z);




