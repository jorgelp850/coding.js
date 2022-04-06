function lastTwo(str){ 
  let last = str.substring(str.length-2,str.length-1);
  let first = str.substring(str.length-1);
  return str.substring(0,str.length-2) + first + last;
}