function countCode(str){
  let count = 0;
  for (let i = 0; i < str.length; i  ++){
    if (str[i] == "c" && str[i+1] == "o" && str[i+3] == "e"){
      count = count + 1;
    }
  }
  return count;
}