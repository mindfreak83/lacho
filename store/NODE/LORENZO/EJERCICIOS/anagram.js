"use strict"

function isAnagram(str1, str2){

var lngth=0, lngth2=0, str3=[], str4=[], z=0;
var msg1= "Es anagrama", msg2="No es anagrama ", n=0, n1=0;

lngth=str1.length;

if(str1.length===str2.length){

    //console.log("son del mismo tamaño");
    for(var x=0; x<lngth; x++){
        str3[x]=str1[x];
        str4[x]=str2[x];
    }
    str3=convertir(str3, lngth);
    str4=convertir(str4, lngth);
    //console.log(str3, str4, lngth);
    for(var x=0; x<lngth; x++){
        for(var y=0; y<lngth; y++){
              if(str3[x]===str4[y]){
                  str4[y]="";
                  n++;
                  //console.log(str3[x], str4[y]);
                  //break;
                }
            }

          }

if(n===lngth){
  return msg1;
}else{
  return msg2;
}
  console.log(str3, str4, n);
  }
}


function convertir(str5, lngth3){

  for(var x=0; x<lngth3; x++){
      switch (str5[x]) {
        case "A": str5[x]="a";
          break;
        case "B": str5[x]="b";
          break;
        case "C": str5[x]="c";
          break;
        case "D": str5[x]="d";
          break;
        case "E": str5[x]="e";
          break;
        case "F": str5[x]="f";
          break;
        case "G": str5[x]="g";
          break;
        case "H": str5[x]="h";
          break;
        case "I": str5[x]="i";
          break;
        case "J": str5[x]="j";
          break;
        case "K": str5[x]="k";
          break;
        case "L": str5[x]="l";
          break;
        case "M": str5[x]="m";
          break;
        case "N": str5[x]="n";
          break;
        case "O": str5[x]="o";
          break;
        case "P": str5[x]="p";
          break;
        case "Q": str5[x]="q";
          break;
        case "R": str5[x]="r";
          break;
        case "S": str5[x]="s";
          break;
        case "T": str5[x]="t";
          break;
        case "U": str5[x]="u";
          break;
        case "V": str5[x]="v";
          break;
        case "W": str5[x]="w";
          break;
        case "X": str5[x]="x";
          break;
        case "Y": str5[x]="y";
          break;
        case "Z": str5[x]="z";
          break;
      }
  }
return str5;
}

console.log(isAnagram("Rtma","Amar"));
