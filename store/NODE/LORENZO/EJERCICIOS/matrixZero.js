"use strict"

var matrix=[[1,1,2,4],[1,'r',3,4],[1,'a',3,4],[1,3,0,4]];

function convertMatrix(m){
let lngt=0, y1=[], z1=[];

if(typeof m !== 'object'){
  return false;
}else{
	if(Array.isArray(m)===true){
    lngt=lngth(m);
    for(let y=0; y<m.length; y++){
        for(let z=0; z<lngt; z++ ){
            if(m[y][z]===0){
              y1[y1.length]=y;
              z1[z1.length]=z;
            }
          }
        }
    for(let x=0; x<y1.length; x++){
        for(let y=0; y<m.length; y++){
            m[y][z1[x]]=0;
        }
        for(let z=0; z<lngt; z++){
            m[y1[x]][z]=0;
        }
    }
    return m;
  }else{
    return false;
  }
 }
}
console.log(convertMatrix(matrix));
console.log(convertMatrix("s"));
console.log(convertMatrix(true));
console.log(convertMatrix(true));
console.log(convertMatrix({retorno:4}));

function lngth(m1){
let x=0;
while(m1[0][x]>=0){
  x++;
}
return x;

}
