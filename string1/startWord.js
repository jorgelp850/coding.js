function startWord(str, word){
  if (str.substring(1).startsWith(word.substring(1))){
   return str.substring(0,word.length);
  }
  return "";
}