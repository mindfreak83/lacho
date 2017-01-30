"use strict"

function sumUpAll () {
  var sum = 0;

  for (var x = 0; x < arguments.length; x++){
        if (typeof arguments[x] === 'number'){
            sum += arguments[x];
        } else {
          sum = false;
          break;
        }
  }
return sum;
}
console.log(sumUpAll(1,2,3,4,{},5));
