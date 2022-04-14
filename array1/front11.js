function front11(a, b){
  var newarray = [];
  if (a.length >= 1 && b.length >=1){
   newarray[0] = a[0];
   newarray[1] = b[0];
   return newarray;
  }
  else if (a.length == 0 && b.length >= 1){
   newarray[0] = b[0];
   return newarray;
  }
  else if(a.length >= 1 && b.length == 0){
   newarray[0] = a[0];
   return newarray;
  }
   return newarray;               
 }