"use strict"

var res=0;
var den=1;

function sec(n){
  for(var x=n; x>0; x--){
      res+=(1/den);
      //console.log(res.indexOf(2));
      console.log("\nResultado en decimales: "+ res.toFixed(2));
      //console.log(res);
      den+=3;
  }
}
sec(20);
