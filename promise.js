function executor(a,b) {
    let condition = true;
    if (condition){console.log(a);}
    else{b("it is false")}  
}

let p = new Promise(executor);
function abc (x) {console.log("x")}
console.log((p));
p.then(abc());
p.catch(function (y) {console.log(y)});
