function midThree(nums){
  var mitad = parseInt(nums.length/2);
  var nuevo = [];
  var mitadDearray = nums[mitad];
  var posicionMas = nums[mitad +1];
  var posicionMenos = nums[mitad-1];
   nuevo[0] = posicionMenos;
   nuevo[1] = mitadDearray;
   nuevo[2] = posicionMas;
   return nuevo;
 }