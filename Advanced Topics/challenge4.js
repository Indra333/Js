const myObject= new Object();
console.log(typeof myObject);
console.log(myObject instanceof Object);
console.log(myObject instanceof Function);

const myFunction= new Function("a","console.log(a);");
console.log("hello");
console.log(typeof myFunction);
console.log(myFunction instanceof Object);
console.log(myFunction instanceof Function);
