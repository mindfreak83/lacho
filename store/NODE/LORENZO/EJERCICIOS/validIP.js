"use strict"


function isValidIPAddress(str1){
var ary=[], lngth=0, ary1=[], ary2=[], ary3=[], ary4=[], cont=0;
var x1=0, x2=0, x3=0, x4=0, val1=0, val2=0, val3=0, val4=0;

lngth=dimension(str1);
//console.log(lngth);

for(var x=0; x<lngth; x++){
    ary[x]=str1[x];
    if((ary[x]==='.')&&(ary[x-1]==='.')||ary[x]===' ')
        cont++;
    if(ary[0]==='.'||ary[0]===' ' )
    cont++;
    }
    if(validNum(ary, lngth))
        cont++;
    //console.log(cont);
    //console.log(validNum(ary, lngth));


if(cont>0){
  return "INVALID IP";
}else{
  var y=0;
  for(var x=0; x<lngth; x++){
            //console.log(y,x);
    if(ary[x]==="."){
        y++;

    }

      if((y===0)&&ary[x]!=="."){
          ary1[x1]=ary[x];
          x1++;
      }
      if((y===1)&&ary[x]!=="."){
        ary2[x2]=ary[x];
        x2++;
      }
      if((y===2)&&ary[x]!=="."){
        ary3[x3]=ary[x];
        x3++;
      }
      if((y===3)&&ary[x]!=="."){
        ary4[x4]=ary[x];
        x4++;
      }

  }



val1=convEnt(ary1, x1);
val2=convEnt(ary2, x2);
val3=convEnt(ary3, x3);
val4=convEnt(ary4, x4);
//   //console.log(ary1,x1, ary2,x2, ary3,x3, ary4, x4);
  //console.log(val1,val2, val3, val4);
  //console.log(ary);

  if((convEnt(ary1, x1)<=255)&&(convEnt(ary2, x2)<=255)&&(val3=convEnt(ary3, x3)<=255)&&(val4=convEnt(ary4, x4)<=255)){
      return "VALID IP";
  }
  else{
    return "INVALID IP";
  }

}// llave cierre else

}


function convEnt(ary6, v1){
var cont1=1, temp=0 ;
  for( var y=0; y<v1-1; y++){
      cont1*=10;
  }

  for(var y=0; y<v1; y++){
      temp+=ary6[y]*cont1;
      cont1/=10;
  }

  return temp;
}

function dimension(str2){
var x=0;

while(str2[x])
x++;

return x;
}

console.log(isValidIPAddress("255.255.255.hola"));

function validNum(str5, lngth3){

  for(var x=0; x<lngth3; x++){
      switch (str5[x]) {
        case "A": return true;
          break;
        case "B": return true;
          break;
        case "C": return true;
          break;
        case "D": return true;
          break;
        case "E": return true;
          break;
        case "F": return true;
          break;
        case "G": return true;
          break;
        case "H": return true;
          break;
        case "I": return true;
          break;
        case "J": return true;
          break;
        case "K": return true;
          break;
        case "L": return true;
          break;
        case "M": return true;
          break;
        case "N": return true;
          break;
        case "O": return true;
          break;
        case "P": return true;
          break;
        case "Q": return true;
          break;
        case "R": return true;
          break;
        case "S": return true;
          break;
        case "T": return true;
          break;
        case "U": return true;
          break;
        case "V": return true;
          break;
        case "W": return true;
          break;
        case "X": return true;
          break;
        case "Y": return true;
          break;
        case "Z": return true;
          break;
          case "a": return true;
            break;
          case "b": return true;
            break;
          case "c": return true;
            break;
          case "d": return true;
            break;
          case "e": return true;
            break;
          case "f": return true;
            break;
          case "g": return true;
            break;
          case "h": return true;
            break;
          case "i": return true;
            break;
          case "j": return true;
            break;
          case "k": return true;
            break;
          case "l": return true;
            break;
          case "m": return true;
            break;
          case "n": return true;
            break;
          case "p": return true;
            break;
          case "p": return true;
            break;
          case "q": return true;
            break;
          case "r": return true;
            break;
          case "s": return true;
            break;
          case "t": return true;
            break;
          case "u": return true;
            break;
          case "v": return true;
            break;
          case "w": return true;
            break;
          case "x": return true;
            break;
          case "y": return true;
            break;
          case "z": return true;
            break;
      }
  }

}
