"use strict"

function rounded(n){

var x, temp=0, ary=[], cont1=1, temp2=0;
n*=100;
x=n+"s";

for(var y=0; y < x.length; y++){
    if(x[y]!=="."){
      ary[y]=x[y];
    }else{
      break;
    }
}

for( var y=0; y<ary.length-1; y++){
    cont1*=10;
}

for(var y=0; y<ary.length; y++){
    temp+=ary[y]*cont1;
    cont1/=10;
}

 temp2=n-temp;

 if(temp2>=0.5&&temp2<=0.9){
    temp++;
    temp/=100;
 }else{
    temp/=100;
 }
return parseFloat(temp);
}

console.log(rounded(3.9942));
