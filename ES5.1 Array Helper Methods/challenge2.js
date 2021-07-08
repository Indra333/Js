const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}'
  ];

  const postsArray= postsJSON.map(post => JSON.parse(post));
  console.log(postsArray);