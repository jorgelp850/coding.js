function rotateLeft3(nums){
  let char = nums.splice(0,1);
  nums.splice(nums.length,0,char[0]);
  return nums;
}