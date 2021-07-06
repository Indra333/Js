'use strict';
var numbers1=[23,87,110,11,20,5,34];
var numbers2=[11,21,31];

const onlyOddNumbers= function(arr){
    var oddNumbers=[];
    var EVEN_NUMBERS_QUANTITY=0;
    const LEN= arr.length;

    for(let i=0;i<LEN;i++){
        arr[i]%2 ?oddNumbers.push(arr[i]) : EVEN_NUMBERS_QUANTITY++;
    }

    
    if(EVEN_NUMBERS_QUANTITY === 0){
        let info="Array contains only odd numbers";
        console.log(info);
    }
    else{
        let info ="There are "+ EVEN_NUMBERS_QUANTITY+ " even numbers";
        console.log(info);
    }

    return{
        oddNumbers: oddNumbers,
        EVEN_NUMBERS_QUANTITY: EVEN_NUMBERS_QUANTITY
    };
};



console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));