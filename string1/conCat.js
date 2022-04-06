function conCat(a, b){
  if(a.charAt(a.length-1) == b.charAt(0)){
    return a.substring(0,a.length-1) + b;
  }
  return a + b;
}