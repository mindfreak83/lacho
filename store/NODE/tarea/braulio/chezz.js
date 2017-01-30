"use strict"

var str="", z=0;

function chezz(n){

  for(var x=1; x<=n; x++){
      str="";
      for( var y=1; y<=n; y++){
          if((x%2)===0){
              if((y%2)===0){
                str+='0';
              }else{
                str+='X';
              }
          }else{
            if((y%2)!==0){
              str+='0';
            }else{
              str+='X';
            }
          }
        }
      console.log(str);
    }
  }
chezz(3);
