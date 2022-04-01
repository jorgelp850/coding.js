function nTwice(str, n){
  if (n == 0){
    return "";
  }
  let new1 = str.substring(0, [n]);
  let new2 = str.slice(-n)
  return new1 + new2;
  
}