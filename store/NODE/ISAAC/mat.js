"use strict"

function matrix(){
let ary=[[1,2,3],[4,5,6],[7,8,9]]
/*
for(let y=0; y<ary.length; y++){
  for(let x=0; x<ary[y].length; x++){
      console.log(ary[y][x]);
  }
}

console.log("");

for(let y=ary.length-1; y>=0; y--){
  for(let x=ary[y].length-1; x>=0; x--){
      console.log(ary[y][x]);
  }
}

console.log("");

for(let y=ary.length-1; y>=0; y--){
  for(let x=0; x<ary[y].length; x++){
      console.log(ary[y][x]);
  }
}

console.log("");

for(let y=0; y<ary.length; y++){
  for(let x=0; x<ary[y].length; x++){
      console.log(ary[x][y]);
  }
}

console.log("");

for(let y=ary.length-1; y>=0; y--){
  for(let x=0; x<ary[y].length; x++){
      console.log(ary[x][y]);
  }
}

console.log("");

for(let y=0; y<ary.length; y++){
  for(let x=ary.length-1; x>=0; x--){
      console.log(ary[x][y]);
  }
}

console.log("");

for(let y=ary.length-1; y>=0; y--){
  for(let x=ary.length-1; x>=0; x--){
      console.log(ary[x][y]);
  }
}*/

for (let x=0; x<ary.length; x++){
      console.log(ary[x][x])
}

console.log("");

let y=0;
for (let x=ary.length-1; x>=0; x--){
      console.log(ary[y][x]);
      y++;
}

console.log("");

 y=ary.length-1;
for (let x=0; x<ary.length; x++){
      console.log(ary[x][x], ary[x][y]);
      y--;
}

console.log("");


for (let y=0; y<ary.length; y++){
      if(y%2===0){
          for(let x=0; x<ary.length;x++){
            console.log(ary[y][x]);
          }
        }else{
            for(let z=ary.length-1; z>=0; z--){
              console.log(ary[y][z]);
            }
          }
      }

console.log("");
      for (let y=0; y<ary.length; y++){
            if(y%2!==0){
                for(let x=0; x<ary.length;x++){
                  console.log(ary[y][x]);
                }
              }else{
                  for(let z=ary.length-1; z>=0; z--){
                    console.log(ary[y][z]);
                  }
                }
            }
}



matrix();
