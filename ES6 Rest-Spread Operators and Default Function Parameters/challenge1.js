function meanScore(...scores){
    const LEN=scores.length;
    if(scores.every(element => typeof element === "number")){
        return parseFloat((scores.reduce((sum,score)=> sum+score ,0))/LEN).toFixed(2);
    }
    else{
        throw new Error("Supplied arguments must contain only numbers!");
    }
}
const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

console.log(meanScore(...scores1)); // 1.93

console.log(meanScore(...scores1,...scores2)); // 2.8

console.log(meanScore(...scores1,...scores2,...scores3)); // 2.59

console.log(meanScore(...scores4)); // Supplied arguments must contain only numbers!
