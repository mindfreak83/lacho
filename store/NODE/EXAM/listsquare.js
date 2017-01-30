"use strict"

function listSquare (arr) {
var sum = 0;
  for (var x = 0; x < arr.length; x++) {
        if (typeof arr[x] == 'number'){
            sum += arr[x]*arr[x];
        }else if (typeof arr[x] == 'object') {
            sum += listSquare(arr[x]);
        }
  }
return sum;
}
console.log(listSquare([1,2,3,[1,2,3,[1,2,3]],1,2,3]));
