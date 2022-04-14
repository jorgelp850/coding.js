function findLowestIndex(nums){
  var valorMin = 0;
  var minIndex = nums[0];
  for(i = 0; i< nums.length; i++){
    if(nums[i] < minIndex){
      minIndex = nums[i];
      valorMin = i;
     }     
  }
   return valorMin; 
 }