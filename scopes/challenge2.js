// strict mode
"use strict";

// function myFunction(){
//     a=2; //Uncaught ReferenceError: a is not defined
//     return a;
// }

function myFunction(){
    let a=2; // No error if variable is declared
    return a;
} //pure function

console.log(myFunction()); // 2