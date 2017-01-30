"use strict"

function tribonacci(ary, n){
  var x=0, y=0, zero=0, ary2=[], temp=0, cont=0, z=0, w=0, d=0;
        console.log(ary)
  while(ary[x]>=0){
    //console.log(ary[x])
    // if(ary[x]!==0){
    //     zero+=ary[x];
    //     //console.log(zero, ary[x])
    //   }
      x++;
  };

  //console.log(x, zero)

if(x===3){
    if(n>3){
        ary2=ary;
        for(y=x; y<n; y++){
            w=0;
            //ary[3]=1;
            while(ary2[w]>=0){
              w++;
              };
              //console.log("dimensión del ary ",w);
            for(z=w-3 ; z<w; z++){
                //console.log("hola",temp, ary[z]);
                temp+=ary[z];
            }
            ary[y]=temp;
            temp=0;
        }
        return ary2;
    }
    else{
      for(y=0; y<n; y++){
                  ary2[y]=ary[y];
      }
      return ary2;
    }
    //return "yes";
}else{
  return ary;
}
}
console.log(tribonacci([0,0,1], 2));
