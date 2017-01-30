"use strict"

function didSomeoneWon(matrix){
var x=0, y=0, wonH=0, wonV=0, wonD=0;

while(matrix[x]){
  x++;
}
while(matrix[0][y]){
  y++;
}
//console.log(x,y);

if((x!==3)||(y!==3)){
  return "THE MATRIX IS NOT 3X3 FOR TIC-TAC-TOE GAME";
}else{
  if((x===3)&&(y===3)){
      //console.log(matrix, x, y);
      matrix=convMin(matrix, x, y);

        if(validEntrys(matrix, x, y)){
          //console.log(matrix);
          wonH=(winH(matrix, x, y));
          wonV=winV(matrix, x, y);
          wonD=winD(matrix, x, y);
          //wonV=(winV(matrix, x, y));
            if(wonH){
                return "TRUE";
            }if(wonV){
                return "TRUE"
            }if(wonD){
                return "TRUE";
            }else{
              return "FALSE";
            }

        }else{
          return "MATRIX CONTAIN INVALID CHARACTER"
        }
  }
}

}

console.log(didSomeoneWon([['x','X','x'],['o','X','x'],['o','x','O']]));

console.log(didSomeoneWon([['x','X','o'],['o','o','o'],['o','x','x']]));

console.log(didSomeoneWon([['x','x','o'],['x','O','x'],['o','o','o']]));

console.log(didSomeoneWon([['x','x','o'],['x','o','x'],['X','o','o']]));

console.log(didSomeoneWon([['O','O','x'],['x','o','x'],['X','o','o']]));

console.log(didSomeoneWon([['O','x','x'],['x','o','x'],['X','o','X']]));

console.log(didSomeoneWon([['O','x','x'],['x','o','x'],['X','o','o']]));

console.log(didSomeoneWon([['O','x','x'],['o','x','x'],['X','o','o']]));

console.log(didSomeoneWon([['x','O','o'],['o','x','x'],['o','x','O']]));

console.log(didSomeoneWon([['x','O','o'],['o','x','x'],['o',' ','O']]));

console.log(didSomeoneWon([['x','O','o'],['o','X','x'],['o','x','O']]));

console.log(didSomeoneWon([[1,2,3],[3,4,5,6]]));

console.log(didSomeoneWon([[1,2],[8,9]]));

console.log(didSomeoneWon([[3,4,5,6],[1,2,3]]));

function validEntrys(matrix1, x1, y1){
  var cont=0;
  //console.log(matrix1, y1, x1);
    for(var x=0; x<x1; x++){
      for(var y=0; y<y1; y++){
          if((matrix1[x][y]!=='x')&&(matrix1[x][y]!=='o')&&(matrix1[x][y]!==' ')){
              cont++;
              //console.log(cont);
          }
      }
    }
if(cont>0){
  return false;
}else{
  return true;
}

}// fin funcion validEntrys

function convMin(matrix2, x2, y2){
  var cont=0;
    for(var x=0; x<x2; x++){
      for(var y=0; y<y2; y++){
          if(matrix2[x][y]==="X"){
              matrix2[x][y]="x";
              //console.log(matrix2[x][y]);
          }
          if(matrix2[x][y]==="O"){
              matrix2[x][y]="o";
              //console.log(matrix2[x][y]);
          }
      }
    }

return matrix2;
}// end of function convMin



function winH(matrix3, x3, y3){
  var cont3=0, cont4=0;

  for(var x=0; x<x3; x++){
    for(var y=0; y<y3; y++){
        if (matrix3[x][y]==='o'){
          cont3++;
        }

        if (matrix3[x][y]==='x'){
            cont4++;
        }
        //console.log(cont4);

    }
    if (cont3===3){
      //console.log(cont3);
        return true;
    }else{
      cont3=0;
    }
    if (cont4===3){
      //console.log(cont3);
        return true;
    }else{
      cont4=0;
    }
    //console.log(cont3);
  }

}//end of function winV

function winV(matrix4, x4, y4){
  var cont3=0, cont4=0;

  for(var x=0; x<x4; x++){
    for(var y=0; y<y4; y++){
        if (matrix4[y][x]==='o'){
          cont3++;
        }

        if (matrix4[y][x]==='x'){
            cont4++;
        }
        //console.log("cont4 v",cont4);

    }
    if (cont3===3){
      //console.log(cont3);
        return true;
    }else{
      cont3=0;
    }
    if (cont4===3){
      //console.log(cont3);
        return true;
    }else{
      cont4=0;
    }
    //console.log("cont3 v",cont3);
  }

}//end of function winV


function winD(matrix5, x5, y5){
  var contD=0, z=0, d0=0, dx=0, d01=0, dx1=0;
  for(var x=0; x<x5; x++){
      if(matrix5[x][x]==='o'){
          contD++;
      }
  }
  d0=contD;
  contD=0;
  for(var x=0; x<x5; x++){
      if(matrix5[x][x]==='x'){
          contD++;
      }
  }
  //console.log(contD);
  dx=contD;
  z=y5;
  contD=0;

  for(var x=0; x<x5; x++){
      if(matrix5[x][z-1]==='x'){
          contD++;
          //console.log(x,z-1, matrix5[x][z-1]);
      }
      z--;
  }
  d01=contD;
  // console.log("D2x",d01);


//console.log(dx,d0,dx1,d01 );
if((dx||d0||dx1||d01)===3){
  //console.log("estas aqui", d01);
  return true;
}else{
  //console.log("estas aqui", d01);
  return false;
}
}
