const products = [
    {
      title: "Phone case",
      price: 23,
      quantity: 2,
      category: "Accessories"
    },
    {
      title: "Android phone",
      price: 150,
      quantity: 1,
      category: "Phones"
    },
    {
      title: "Headphones",
      price: 78,
      quantity: 1,
      category: "Accessories"
    },
    {
      title: "Sport Watch",
      price: 55,
      quantity: 2,
      category: "Watches"
    }
  ];

  const sortProductsByPrice= products =>{
      products.sort((a,b)=>{ 
          return a.price - b.price;
      });
  }
  sortProductsByPrice(products);
 
  console.log(products);
 