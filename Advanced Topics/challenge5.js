console.log("Globale Execution Context-root/first level in the stack");

function firstLevel(){
    console.log("Function Execution Context-second level in the stack");

    function secondLevel(){
        console.log("Function Execution Context-third level in the stack");

        function thirdLevel(){
            console.log("Function Execution Context-fourth level in the stack");
            console.log("Exiting fourth level in the stack");
        }

        thirdLevel();
        console.log("Exiting third level in the stack");
    }

    secondLevel();
    console.log("Exiting second level in the stack");
}

firstLevel();
console.log("Exiting root/first level in the stack");