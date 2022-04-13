function swapEnds(nums){
  var primerDigito = nums[0]
  var posicion0 = nums[nums.length-1];
  nums[0] = posicion0;
  nums[nums.length - 1] = primerDigito;
   return nums;
}