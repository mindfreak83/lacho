"use strict"

// Create a function called returnAllIndex which takes two strings as parameter,
// the first one is the word to look into, and the second one what are we looking
// in the word.
// if there is no matches return -1, if there is only one match return the index
// and if there are more than 1 match return an array with all the match index.

function returnAllIndex(str1, str2){
  var x=0, ary=[], val=0, ind=0, cont=0, indx=[];
  for(x=0; x<str1.length; x++){
    ary[x]=str1[x];
  }
val=str1.includes(str2);
if(val){
  //console.log(val);
      for(x=0; x<str1.length; x++){
        for(var y=0; y<str2.length;y++){
          if(str1[x]==str2[y]){
              indx[cont]=x;
              ind=x;
              cont++;
          }
        }
      }
      if(cont>0&&cont<2){
         return ind;
      }if(cont>1){
          return indx;
      }
}
if(val!==true){
      return -1;
}
}
console.log(returnAllIndex("holo coptoin", "o"));
