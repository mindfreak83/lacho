"use strict"

//write a function called isInLine which receives an array of coordinates and
//return  a true if the coordinates are on the same line, false otherwise

//d=raíz (px2-px1)2 + (py2-py2)2 validar que sea mayor a 0

let c;

function isInLine(ary){

var i=0, aryt=[];

  for(i=ary.length-1; i>0; i--){
      aryt[i-1]=calSegm(ary[i], ary[i-1]);
   }
   all(ary);
   //console.log(ary);
   console.log(aryt);
}

c=isInLine([[1,1],[2,2],[3,3],[4,4]]);

//console.log(c);

function calSegm(ary2, ary1){
  var tempx=0, tempy=0, result=0;
    console.log("segmentos aray2 ",ary2[0],"aray1 ", ary1[0],"aray2 ",ary2[1], "aray1", ary1[1]);
      tempx=Math.pow(ary2[0]-ary1[0],2);
      tempy=Math.pow(ary2[1]-ary1[1],2);
      //console.log(tempx, tempy);

      result=Math.sqrt(tempx+tempy);

      return result;
}

function all(ary3){
    var ary4=[], temp1x=0, temp1y=0,tempT=0;
    for(var x=ary3.length-1; x>=0; x--){
        if(x===ary3.length-1){
          temp1x=ary3[x][0];
          temp1y=ary3[x][1];
          console.log("dentro de if ", temp1x, temp1y);
        }
        else{
        temp1x=ary3[x][0]-temp1x;
        temp1y=ary3[x][1]-temp1y;
        console.log("en else ", temp1x, temp1y);
        //console.log("completo fin",temp1x, temp1y, ary3[x][0], ary3[x][1]);
      }
    }
    console.log(temp1x, temp1y);

    tempT=Math.pow(temp1x,2)+Math.pow(temp1y,2);
    console.log(tempT, Math.pow(temp1x,2), Math.pow(temp1y,2));
    tempT=Math.sqrt(tempT,2);
    console.log(tempT, temp1x, temp1y);
}
