"use strict"

// Create a function which takes a string literal or a string object and
// put the first letter of each word in upper case and the rest of them in lowe case,
// this function have to return a string

function toUpandDown(str1){
  var sub="", slc="", all="" ;

      sub=str1[0];
      slc=str1.slice(1);

      sub=sub.toUpperCase();

      slc=slc.toLowerCase();

      all=sub.concat(slc);

      return all;
}

console.log(toUpandDown("jicamaLsdnkjfd"));
