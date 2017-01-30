"use strict"

function countTwos(n){
  var x=0, ary=[], str="", lngt=0, cont2=0;

  for(x=1; x<=n; x++){
      ary[x]=x;
      str+=ary[x];
  }

//console.log(str);

lngt=lngth(str);

//console.log(lngt);

for(x=0; x<lngt; x++){
    if(str[x]=='2'){
      cont2++;
    }
    //console.log(x, cont2, str[x]);
}
//console.log(str);
return cont2;
}

function lngth(str1){
var y=0;
while(str1[y]){
  y++;
}
return y;
}

console.log("THERE ",countTwos(1000)," 2's IN THE SERIE");
