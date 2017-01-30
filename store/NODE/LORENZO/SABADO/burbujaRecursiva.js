"use strict"

function burbRec(ary){
 var aux = 0, y=0;
  for (var x = 1; x < ary.length-1; x++){
        if (ary[x] > ary[x+1]) {
            aux = ary[x];
            ary[x] = ary[x+1];
            ary[x+1] = aux;
            return burbRec(ary[x]);
        }
  }

}

console.log(burbRec([1,2,3,4,5,6]), false);
