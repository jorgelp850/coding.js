function withoutEnd2(str){
  if (str.length == 1 ){
   return "";
  }let newStr = str.substring(1,str.length-1);
  return newStr;
}