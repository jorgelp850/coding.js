function catDog(str){
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < str.length; i ++){
    if (str[i] === "c" && str[i+1] === "a" && str[i+2] === "t"){
      counter1 = counter1 +1;
    }
    else if (str[i] == "d" && str[i+1] == "o" && str[i+2] == "g"){
      counter2 = counter2 +1;
    }
  }
  if (counter1 === counter2){
    return true;
  }
  return false;
}