function extraFront(str){
  if(str.length < 2){
    return str + str + str;
  }
  let twoChar = str.substring(0,2);
  return twoChar + twoChar + twoChar;
}