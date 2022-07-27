// // Object.keys(obj) and Object.values(obj) and Object.entries(obj)

// const obj = { a: 1, b: "2"};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(obj);



// // Object.assgn()

// const obj1 = { a: 1, b: "2" };
// const obj = Object.assign({}, obj1);
// const obj2 = { b: 3, c: 4 };
// console.log(obj1);
// Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj);


// // Object.create()

// const person = {
//   name: "ram",
//   location: "India",
//   get printIntroduction() {
//     console.log(`My name is ${this.name}. Iam from ${this.location}`);
//   },
// };
// person.printIntroduction;

// const me = Object.create(person);
// me.name = "siri"; // "name" is a property set on "me", but not on "person"
// me.location = "USA"; // inherited properties can be overwritten

// me.printIntroduction;
// // expected output: "My name is siri. iam from USA"
// console.log(person);
// console.log(me);




// // Object.defineProperty()

// const obj = { name: "ram", location: "India" };
// Object.defineProperty(obj, "age", {
//   value: 25,
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });
// console.log(obj);

// obj.age = 26;
// delete obj.age;

// console.log(obj);
// for (let keys in obj) {
//   console.log(keys);
// }