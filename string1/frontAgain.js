function frontAgain(str){
  if(str.length <= 1){
    return false;
  }
  else if (str.endsWith(str.substring(0,2))){
    return true;
  }
  return false;
}