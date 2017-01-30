"use strict"

function nonRepeat(str){
  var ary = [], ary2 = [], temp = 0, letter = [];

  ary=str.split("");

  for(var x = 0; x < str.length; x++){
      for (var y=0; y < str.length; y++)
            if (ary[x]===ary[y]){
                temp++;
            }
      if (temp === 1){
          letter[letter.length]=ary[x];
      }
      temp=0;
  }

return letter[0];
}

console.log("The first letter non repeated in the string is: ", nonRepeat("jonathan"));
