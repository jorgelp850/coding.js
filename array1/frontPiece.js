function frontPiece(nums){
  if (nums.length <= 2){
    return nums;
  }
  let first = nums[0];
  let second = nums[1];
  let newNums = [first,second];
  return newNums;
 }

function frontPiece(nums){
var nuevo = [];
 nuevo[0] = nums[0];
 nuevo[1] = nums[1];
  if (nums.length < 2){
   return nums;
  }
  return nuevo;
}