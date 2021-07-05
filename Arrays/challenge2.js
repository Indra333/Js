const myArray=[1,2];

myArray[10]="abc";

console.log(myArray);//[1, 2, empty × 8, "abc"]
// length: 11