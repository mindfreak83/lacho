"use strict"

function burbuja(ary){
  var aux = 0;
  for (var x = 1; x<ary.length; x++) {
        for(var y = 0; y<ary.length-1; y++) {
            if(ary[y] < ary[y+1]) {
                aux = ary[y];
                ary[y] = ary[y+1];
                ary[y+1] = aux;
            }
        }
  }

  return ary;

}

console.log(burbuja([1,2,3,4,5,6]));

console.log(burbuja([6,5,4,3,2,1]));
