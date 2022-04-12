function deFront(str){
  let firstChar = str.substring(0,1);
  let secondChar = str.substring(1,2);
  if (str.charAt(0) == "a" && str.charAt(1) == "b"){
   return firstChar + secondChar + str.substring(2,str.length);
  }
  else if (str.charAt(0) == "a"){
    return firstChar + str.substring(2,str.length);
  }
  else if (str.charAt(1) == "b"){
    return secondChar + str.substring(2,str.length);
  }
  return str.substring(2,str.length);
}