function withoutX2(str){
  if (str.charAt(0) === "x" && str.charAt(1) === "x"){
    str = str.substring(2);
  }
  else if (str.charAt(0) === "x"){
    str = str.substring(1);
  }
  else if (str.charAt(1) === "x"){
    str = str.replace("x", "")
  }
  return str;
}