"use strict"

var ary=[], str='', x=0;

function forof(z){
for (var y=0; y<=z; y++){
      ary[y]=y;
}

    for(let n of ary){
      if( n<ary.length-1 ){
         str+=ary[n]+'+';
         x+=ary[n];
      }else{
        str+=ary[n]+'=';
        x+=ary[n];
      }
    }
  console.log(str, x);
//console.log(ary);
return ary;
}
var a = forof(15);

console.log(a);
