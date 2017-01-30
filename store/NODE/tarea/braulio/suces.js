"use strict"
var str="";
function suces(n){
  for(var i=n; i>0; i--){
      str+=String(i);
      console.log(str);
  }
}

suces(8);
