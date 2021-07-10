function minMax(...nums){
    return [Math.min(...nums),Math.max(...nums)];
    
  }
  
  let min, max;
  [min,max]=minMax(24, 5, 34, 10);
  console.log(min, max); // 5, 34
  
  [min,max]=minMax(18, 23, 103, 70, 80, 25);
  console.log(min, max); // 18, 103
  