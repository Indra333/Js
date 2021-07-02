function fn(){
    console.log("Greeting from the 'fn' function");

    return (function(a){
        console.log(a);
    });
}

fn()  //function call is an expression. it will executes well and prints message on console
(true) // it will take argument for returned funtion and prints true. because semicolon is not there after funtion call.