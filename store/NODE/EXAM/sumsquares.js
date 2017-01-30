"use strict"

function sumSquares (arr) {
var sum = 0;
  for(var x = 0; x < arr.length; x++) {
      sum += Math.pow(arr[x],2);
  }
return sum;
}

console.log(sumSquares([1,2,2]));
