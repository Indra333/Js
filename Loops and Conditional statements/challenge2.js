function generateRandomNumber(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min));
  }

const myNumbers=[
    2355,7235,8135,1762,2361,8351
];
// let c=0;
do{
    var found=false;
    // c+=1;
    let newRandomNumber = generateRandomNumber(1000,9999);

    for(let num in myNumbers){
        if(num===newRandomNumber){
            found=true;
        }
    }

    if(found===false){
        myNumbers.push(newRandomNumber);
    }
}while(found);


console.log(myNumbers);
// console.log(c);