function endOther(a, b){
  let newA = a.toLowerCase();
  let newB = b.toLowerCase();
  
  if (newA.endsWith(newB) || newB.endsWith(newA)){
    return true;
  }
  return false;
}