"use strict"

// CREATE A FUNCTION CALLED transformToUnicod which takes a string literal parameter
// and transform each position into a unicode value and return an array which have
// an unicod per index.

function transformToUnicode(str){
var x=0, ary=[];
for (x=0; x<str.length; x++){
      ary[x]=str.codePointAt(x);
}

return ary;
}

console.log(transformToUnicode("kjsdnkjdsjksd"));
