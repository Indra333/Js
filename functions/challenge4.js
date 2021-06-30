let i=1;
const myFunction= setInterval(function(){
    console.log("Here is message number "+i);
    i+=1;
    if(i>5){
        clearInterval(myFunction);
    }
},2000);