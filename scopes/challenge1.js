//Functon Scopes
const b=2;
let d=15;

function myFun1(a){
    let b;
    let d=10;
    myFun2(b);
}

function myFun2(a){
    let c=5;
    console.log(a,b,c,d);// Task is what will be the output in this expression statement
}
// undefined, 2, 5, 15 (My output)
// (console output) undefined 2 5 15


myFun1();