function featureCheck(){
    try{
        eval("`Hello`");
    }
    catch(e){
        return false;
    }
    return true;
}

function insertScript(type){
    var el =document.createElement("script");
    el.src= "src/" + type+ ".js";
    document.body.appendChild(el);
}

if(featureCheck()){
    insertScript("es6");
}
else{
    insertScript("es5");
}