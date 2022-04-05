function twoChar(str, index){  
  let str2 = str.substring(index, index+2);
  if(str2.length < 2){
    return str.substring(0,2);
  }
  return str2;
}