console.log("indra" instanceof Number);//false
console.log("indra" instanceof String);//false
console.log("indra" instanceof Boolean);//false
console.log("indra" instanceof Object);//false
// console.log("indra" instanceof null);//challenge3.js:4 Uncaught TypeError: Right-hand side of 'instanceof' is not an object
// console.log("indra" instanceof undefined); //Uncaught TypeError: Right-hand side of 'instanceof' is not an object


console.log(10 instanceof Number);//false
console.log(10 instanceof String);//false
console.log(10 instanceof Boolean);//false
// console.log(10 instanceof null);//challenge3.js:4 Uncaught TypeError: Right-hand side of 'instanceof' is not an object
// console.log(10 instanceof undefined);//challenge3.js:4 Uncaught TypeError: Right-hand side of 'instanceof' is not an object


console.log(false instanceof Boolean);//false

// console.log(null instanceof null);//Uncaught TypeError: Right-hand side of 'instanceof' is not an object

// console.log(undefined instanceof undefined); //Uncaught TypeError: Right-hand side of 'instanceof' is not an object