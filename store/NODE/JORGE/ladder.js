"use strict"

function ladder (n) {
  var slash = '#';
  if (n === 0){
      console.log(slash);
  } else {
      slash+=ladder(n-1);
      console.log(slash);
  }
return slash;
}

ladder(50);
