const myCities=["London","New York","Singapore"];

const arrayInfo= (city, position) => {
    return city+" is located at the index "+position+" in the myCities array";
}
// for
console.log("Using For loop");
(function(){
    const LEN=myCities.length;
    for(let i=0;i<LEN;i++){
        console.log(arrayInfo(myCities[i],i));
    }
})();

console.log("---------------------------");

// for Each
console.log("Using For Each loop");
(function(){
    let i=0;
    myCities.forEach(city => console.log(arrayInfo(city,i++)));
})();