function right2(str){
  let last = str.substring(str.length-2);
  return last + str.substring(0, str.length-2); 
}