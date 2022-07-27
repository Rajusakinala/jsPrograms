let text = "The rain in SPAIN stays mainly in the plain";
let a = text.match(/ain/ig);
console.log(a);



// reversing a string

 function reverseString(str) {
   return str.split("").reverse().join("");
 }
 console.log(reverseString("sukanya"));



 let str = "Hello World!";
//  console.log(str.length);
 let str2 = "";
 for (let i = str.length - 1; i >= 0; i--) {
   str2 = str2.concat(str[i]);
 }
 console.log(str2);



 
 function reverseString(str) {
   let newString = "";
   for (let i = str.length - 1; i >= 0; i--) {
     newString += str[i]; //newString = newString+str[i];
   }
   return newString;
 }
 console.log(reverseString("sahith"));
