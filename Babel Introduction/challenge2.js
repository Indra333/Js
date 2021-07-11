function featureCheck(){
    try{
        eval("`Hello`");
    }
    catch(e){
        return false;
    }
    return true;
}

if(featureCheck()){
    console.log(`Hello from ES6`);
}
else{
    console.log("Hello from ES5");
}