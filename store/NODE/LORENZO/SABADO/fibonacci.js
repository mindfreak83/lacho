"use strict"

function fibonacci(n){
    var m = [], temp=0;
    if(typeof n !== 'number'){
        return false;
    }else{
      if(n===0){
        return [0];
      }
      if(n===1){
        return [0,1];
      }
      if(n>=2){
        m = fibonacci(n-1);
        temp = m[m.length-1] + m[m.length-2];
        return m = m.concat(temp);
      }
     }
console.log(m);
}
console.log(fibonacci(10));
