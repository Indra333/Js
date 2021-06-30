var myPost={};
console.log(myPost);

myPost.postTitle="Object is reference type";
console.log(myPost);

myPost.postLikes=0;
console.log(myPost);

myPost.shared=false;
console.log(myPost);

myPost.postLikes=myPost.postLikes+1;
console.log(myPost);

delete myPost.shared
console.log(myPost);
