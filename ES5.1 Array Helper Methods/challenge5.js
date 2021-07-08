const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false


const arraysAreEqual = (arrayOne,arrayTwo) =>{
    if(arrayOne.length != arrayTwo.length){
        return false;
    }

    if(arrayOne.some((element,index)=>
            element != arrayTwo[index]
    )){
        return false;
    }

    return true;
}

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false
