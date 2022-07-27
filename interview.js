// "Question:

// Given a string with employee id, name and manager id, print out all of them in the tree format.
// "
// "Input: "1:Max:4, 4:Ann:0, 2:Jim:4, 3:Tom:1""

// 1 -> employee id
// Max -> name
// 4 -> manager id"

// Output

// "Output:

// Ann
// - Max
// -- Tom
// - Jim
// "

// **/


// let str = "1:Max:4, 4:Ann:0, 2:Jim:4, 3:Tom:1";

let str = "4:Ann:0, 1:Max:4, 3:Tom:1, 2:Jim:4";

const createEmployeeHierarchy = (str) => {
  const employees = str.split(",").map((eachSet) => {
    let setArray = eachSet.trim().split(":");
    return {
      id: parseInt(setArray[0]),
      name: setArray[1],
      mgrId: parseInt(setArray[2]),
    };
  });
  return employees;
};
objArray = createEmployeeHierarchy(str);
console.log(objArray);

console.log('printing the relation between them');
let Arr = [];
objArray.forEach((item, index, array) => {
  let flag = true;
  array.forEach((ele) => {
        if (item.mgrId == ele.id) {
        console.log(item.name, "manager is ", ele.name);
        flag = false;
        if (Arr.includes(ele.name)) {
            Arr.push("-"+item.name);
            } else if (Arr.includes("-"+ele.name)) {
            Arr.push("--"+item.name)
        } else {
            Arr.push("-"+item.name, ele.name);
        }
        }
  });
  if (flag) {
    console.log(item.name, "is CEO");
    if(!Arr.includes(item.name)){Arr.push(item.name)}
  }
});

console.log('printing final Array');
console.log(Arr);
Arr.forEach((output) => console.log(output));
