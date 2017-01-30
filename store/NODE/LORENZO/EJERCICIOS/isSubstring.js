"use strict"

function isRotation(str, str1){
 let cont=0, x1=[], lngt=0, x2=[[],[]], z=0, z1=0;

if(typeof str !== 'string' || typeof str1 !== 'string'){
   return false;
}else{
  if( str.length !== str1.length){
     return false;
  }else{
    for(let x=0;x<str.length; x++){
        if(str[0]===str1[x]){
           cont++;
           x1[x1.length]=x;
      }
    }
    //console.log(cont, x1);
    for(let x=0; x<x1.length; x++){
        z=0;
        for(let y=0; y<str1.length; y++){
            x2[x][y]=str1[x1[x]+z];
            console.log(x1[x]+z,x1[x], z);
            if(x1[x]+z===str1.length-1){
                z=-x1[x];
            }else{
                z++;
            }
        }
        console.log("aqui corta");
    }
    console.log(x2);

  }
 }
}

console.log(isRotation("holah", "lahho"));
