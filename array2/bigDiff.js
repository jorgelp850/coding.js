function bigDiff(nums){
  var valorMaj = nums[0];
  for(i = 0; i< nums.length; i++){
     if(nums[i] > valorMaj){
       valorMaj = nums[i];
     }
  }
  var valorMin = nums[0];
  for(i = 0; i< nums.length; i++){
     if(nums[i] < valorMin){
       valorMin = nums[i];
     }
  }
  return valorMaj - valorMin;
 }