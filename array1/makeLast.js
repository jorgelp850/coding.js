function makeLast(nums){
  let array = new Array(nums.length * 2);
  array.fill(0);
  let last = nums[nums.length-1];
  array[array.length-1] = last;
  return array;
}