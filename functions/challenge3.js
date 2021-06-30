function outerFunction(a,b){
    function innerFunction(c){
        return c*c;
    }
    let d=a+b;
    console.log(innerFunction(d));
}

outerFunction(2,3);