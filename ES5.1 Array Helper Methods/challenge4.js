const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arrayCheck = inputArray=>{
    if(inputArray.some(element => typeof element != "number")){
        return "Some elements are not numbers";
    }

    if(inputArray.every( (element,index,array) => index>0 ? element>=array[index-1] : true)){
        return "Array is sorted is ascending order";
    }

    if(inputArray.every(
        (element,index,array)=>index>0 ? element<=array[index-1] :true 
    )){
        return "Array is sorted is descending order";
    }

    return "Array is not sorted";
};

console.log(arrayCheck(a));
console.log(arrayCheck(b));
console.log(arrayCheck(c));
console.log(arrayCheck(d));

