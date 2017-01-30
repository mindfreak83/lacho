"use strict"

function matrix (arr) {
var lnty = arr.length, lntx = 0, ary = new Array(), arx = new Array();

while (arr[0][lntx] != null) {
       lntx ++;
}

console.log(lntx);

for (var y = 0; y < lnty; y++) {
    for (var x = 0; x < lntx; x++) {
          if (arr[y][x] === 0 || arr[y][x] === null) {
              ary[ary.length] = y;
              arx[arx.length] = x;
          }
    }
}

console.log(ary, arx, lntx);

for (var x = 0; x < ary.length; x++){
     for (var y = 0; y < lnty; y++)
          arr[y][arx[x]] = 0;
     for (var z = 0; z < lntx; z++)
          arr[ary[x]][z] = 0;
}
return arr;
}
console.log(matrix([[0,2,3],[4,5,6],[0,8,9],[10,11,12]]));
