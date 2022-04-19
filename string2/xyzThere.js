function xyzThere(str){
  for (i = 1; i < str.length; i++){
    if (str[i] == "x" && str[i+1] == "y" && str[i+2] == "z" && str[i-1] !== "."){
      return true;
    }
  }
  if (str.startsWith("xyz")){
    return true;
  }
  return false;
}