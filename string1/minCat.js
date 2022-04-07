function minCat(a, b){
  let a2 = a.length;
  let b2 = b.length;
  
  if (a.length > b.length){
   let del =  a2 - b2;
   return a.substring(del,a.length) + b;
  }
  else if (b.length > a.length){
   let del =  b2 - a2;
   return a + b.substring(del,b.length);
  }
}