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
      ary = recur(ary, n-1);
      console.log(ary);

      ary.push(aux);
  }
  return ary;
}

console.log(pascal(4));

function recur (ary1, cont) {

  var val = Array.from (ary1[cont-3]);
  for (let x = 0; x < n; x++) {
       if (x === 0 || x === n-1) {
           aux.push(1);
           //console.log(" if ", aux);
       } else {
          aux.push(val[x] + val[x-1]);
          //console.log("else ", aux);
       }
  }
  return ary1.push(recur(aux, cont-1));
}
