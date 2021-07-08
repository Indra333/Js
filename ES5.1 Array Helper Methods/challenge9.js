const posts = [
    {
      title: "How to find JavaScript developer job?",
      postId: 3421,
      comments: 25
    },
    {
      title: "Is it hard to learn ES6?",
      postId: 5216,
      comments: 3
    },
    {
      title: "Should I learn React or Angular?",
      postId: 8135,
      comments: 12
    }
  ];
  
  const minimalComentsQty = 10;

  const popularPostsIds=(posts, minimalComentsQty)=>
      posts.reduce((postIds,post) => {
          if (post.comments>= minimalComentsQty)
            postIds.push(post.postId);
          return postIds;
      },[]);


  
  console.log(popularPostsIds(posts, minimalComentsQty)); // [3421, 8135]
  