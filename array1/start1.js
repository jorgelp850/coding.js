function start1(a, b){
  if(a.includes(1) && b.includes(1)){
    return 2;
  }
  else if(a.includes(1) || b.includes(1)){
    return 1;
  }
  return 0;
}