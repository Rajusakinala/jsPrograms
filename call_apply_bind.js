// // way 01.

// const object = {
//     pi: 3.14,
//     e : 10,

// }

// function Area(r){
//     console.log(object.pi * r *r);
//     console.log(this.pi * r *r);
// }

// Area.call(object, 10);
// Area.apply(object, [10]);
// let a = Area.bind(object, [10]);
// a();

// way 02.

let person = {
    name: "Ram",
    city: "USA"
}

function greetting (greet, message){console.log(`${greet}. ${this.name} ${message}`)};


greetting("hii", "hello")
greetting.call(null, "hii", "hello")

greetting.call(person, "hello", "how are you");
greetting.apply(person, ["hello", "how are you"]);
let a = greetting.bind(person, "hello", "how are you");
a()