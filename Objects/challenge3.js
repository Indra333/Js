var objectWithNestedObject={};

objectWithNestedObject["nestedObject"]={};

console.log(objectWithNestedObject);

objectWithNestedObject.nestedObject.a=null;

const name="b";
objectWithNestedObject["nestedObject"][name]=true;
console.log(objectWithNestedObject)
