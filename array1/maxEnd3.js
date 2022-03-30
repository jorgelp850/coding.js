function maxEnd3(nums){
  var larger;
  if (nums[0] >= nums[2]){
    larger = nums[0];
  }else if (nums[2] >= nums[0]){
    larger = nums[2];
  }
  for(let i = 0; i < nums.length; i ++){
    nums[i] = larger;
  }
  return nums;
}

 // soución de alejo 
 function maxEnd3(nums){
  var larger;
  if (nums[0] >= nums[2]){
    larger = nums[0];
  }else if (nums[2] >= nums[0]){
    larger = nums[2];
  }
  return nums.fill(larger);
}