function maxTriple(nums){
  var mitad = parseInt(nums.length/2);
  var primero = nums[0];
  var ultimo = nums[nums.length -1];
  var medio = nums[mitad];
  if (primero > ultimo && primero > medio){
    return primero;
  }
  else if (medio > primero && medio > ultimo){
    return medio;
  }
  return ultimo;   
}