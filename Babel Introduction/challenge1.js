let myArray=[1,2,3];
// destructuring
function fn1(array){
    let [a,b,c]=myArray;
}

function fn2(array) {
    let [a, b, c] = myArray;
  }

console.time("Function 1")
fn1();
console.timeEnd("Function 1");

console.time("Function 2")
fn2();
console.timeEnd("Function 2");