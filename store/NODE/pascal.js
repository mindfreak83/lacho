"use strict"

function pascal (n) {
  var ary = [];
  var aux = [];

  if (n === 1) {
      aux.push(n);
      ary.push(aux);
      return ary;
  }
  if (n > 1) {
      ary = pascal(n-1);
      var val = Array.from (ary[n-2]);
      for (let x = 0; x < n; x++) {
        debugger;
           if (x === 0 || x === n-1) {
               aux.push(1);
           } else {
              aux.push(val[x] + val[x-1]);
           }
      }
      ary.push(aux);
  }
  return ary;
}

console.log(pascal(10));
