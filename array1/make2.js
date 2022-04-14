function make2(a, b){
  var nuevo = [];
  if (a.length >=2){
   nuevo[0] = a[0];
   nuevo[1] = a[1];
   return nuevo;
  }
  else if (a.length ==1 && b.length >=1){
   nuevo[0] = a[0];
   nuevo[1] = b[0];
   return nuevo;
  }
  else {
   nuevo[0] = b[0];
   nuevo[1] = b[1];
   return nuevo;
  }     
}