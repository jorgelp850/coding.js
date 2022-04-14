function countHi(str){
  let counter = 0;
  for (let i = 0; i < str.length; i ++){
    if (str[i] == "h" && str[i+1] == "i"){
     counter = counter + 1;
    }
  }
  return counter;
}
