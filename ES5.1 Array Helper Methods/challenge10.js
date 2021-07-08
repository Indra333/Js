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
  
 
 const quantityByCategories = products =>
     products.reduce((categories,product) =>{
         const cat=product.category;
         if(categories.hasOwnProperty(cat)){
             categories[cat]+=1;
         }
         else{
             categories[cat]=1;
         }
         return categories;
     }
     ,{});
 
  
  console.log(quantityByCategories(products));
  /* {
    Accessories: 3,
    Phones: 1,
    Watches: 2
  } */
  