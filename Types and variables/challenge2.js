var x=10;
var y=true;

var myObject={
    a:x,
    b:y
}

console.log(myObject);

let anotherObject={
    newA: 20,
    b:y,
    c:myObject
}

console.log(anotherObject);