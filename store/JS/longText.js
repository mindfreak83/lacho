"use strict"

function longText(array) {
  var aryn = [], res;
  for(var x = 0; x < array.length; x++) {
      if ((typeof array[x]) === 'string') {
          aryn[aryn.length] = array[x];
          }
      }
console.log(aryn);
res = aryn[0];
    for (var x = 0; x < aryn.length-1; x++) {
          if ( res.length < aryn[x+1].length ) {
            console.log(aryn[x].length);
              res = aryn[x+1];
          }
    }
    return ("La palabra mayor es: "+ res);
  }

console.log(longText(["ljbsdkjbcjksd",true,5,false,"hola","adios",2,"fernando"]));
