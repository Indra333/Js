// callback function
// what will be logged to the console

setTimeout(function myFun(){
    console.log("Hello from myFn function");
},2000);

myFun();//Uncaught ReferenceError: myFun is not defined
//prints "Hello froms myFun function" after 2 seconds
