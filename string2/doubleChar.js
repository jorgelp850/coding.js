function doubleChar(str){
  let str2 = "";
  for (let i = 0; i < str.length; i++){    
    str2 += str[i] + str[i] ;
  }
  return str2;
}