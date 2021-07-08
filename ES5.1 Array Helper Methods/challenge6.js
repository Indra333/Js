const transport = ["Bus", "Car", "Bicycle", "Airplane"];

const elementFound= (inputArray,searchElement) =>{
    if(inputArray.some(element => element === searchElement)){
        return true;
    }
    return false;
}

console.log(elementFound(transport, "Bus")); // true
console.log(elementFound(transport, "Phone")); // false
console.log(elementFound(transport, "Airplane")); // true
