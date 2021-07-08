
function taggedTemplate(arrayOfStrings){
    const vals=Array.from(arguments).slice(1);
    // console.log(vals);
    return arrayOfStrings.reduce((concatStr,element,index)=>{
        return concatStr+element+ (typeof vals[index] !== "undefined" ? vals[index]: "");
    },"");
  }
  

  const a = 10;
  const b = 5;
  const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${a +
    b}`;
  
  console.log(sum);

  const girl = "Alice";
  const boy = "Bob";
  const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;
  
  console.log(friendsInfo);
  