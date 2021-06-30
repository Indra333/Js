function outerFunction(a,b){
    function innerFunction(c){
        return c*c;
    }
    let c=a+b;
    console.log(innerFunction(c));
}

outerFunction(2,3);