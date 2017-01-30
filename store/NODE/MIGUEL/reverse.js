"use strict"
// Quinto
// Create a function called reverseWords() which takes a string and is going
// to reverse each word, not the whole string at once, and if the string have
// numbers from 0 to 9, you will replace them will ‘ZERO’, ‘ONE’, ‘TWO’, …,
// ‘NINE’ strings after you reverse the words
//
// example
// reverseWords(‘This is a Wo2rd mate’) //sihT si a drTWOoW etam

function reverseWords(str){
  var x=0, ary=[], str1="", ary2=[];
  ary=str.split(" ");

for(x=0; x<ary.length; x++){
    ary[x]=reverse(ary[x]);
  }

for(x=0; x<ary.length; x++){
    for(var y=0; y<ary[x].length; y++){
        str1+=ary[x][y];
    }
    str1+=" ";
}

for(x=0; x<str1.length; x++){
    ary[x]=str1[x];
}

  for(x=0; x<ary.length; x++){
      if(ary[x]===0){
        ary[x]="ZERO"
      }
      if(ary[x]==1){
        ary[x]="ONE"
      }
      if(ary[x]==2){
        ary[x]="TWO"
      }
      if(ary[x]==3){
        ary[x]="THREE"
      }
      if(ary[x]==4){
        ary[x]="FOUR"
      }
      if(ary[x]==5){
        ary[x]="FIVE"
      }
      if(ary[x]==6){
        ary[x]="SIX"
      }
      if(ary[x]==7){
        ary[x]="SEVEN"
      }
      if(ary[x]==8){
        ary[x]="EIGHT"
      }
      if(ary[x]==9){
        ary[x]="NINE"
      }
  }
str1="";
  for(var y=0; y<str.length; y++){
      str1+=ary[y];
  }
return str1;
}
console.log(reverseWords("anita2kmfk3 kjbkjhb mn7 675ngf"));


function reverse(str2){
  var str3="";
  for(var y=str2.length-1; y>=0; y--){
      str3+=str2[y];
  }
  return str3;
}
