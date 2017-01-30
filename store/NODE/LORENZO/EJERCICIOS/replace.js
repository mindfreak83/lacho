"use strict"

function convertSpaces(str){

var x=0, str2="", str3="", repS="%20", ary=[];

console.log(str.length, str);

for(var x=0; x<str.length; x++){
    if(str[x]===" "){
        str2+=repS;
    }else{
      str2+=str[x];
    }
}

return str2;
}


console.log(convertSpaces("hola mundo cruel te odio"));
