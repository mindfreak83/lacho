"use strict"

// Create a function called closerIndex which takes two strings,
// the first one is the word to look into, and the second one is the string to look,
// the function have to return 1 if the second parameter is closer to the index 0
// than the last index to the first parameter .length, have to return 0 if is a
//  draw and -1 if the index is closer to the end than the start,
//  and if there are no match return undefined

// closerIndex(‘anita’ , ‘a’) // 0
// closerIndex(‘anita’ , ‘n’) //1
// closerIndex(‘anita’ , ‘t’) //-1
// closerIndex(‘anita’ , ‘af’) // undefined

function closerIndex(str, str1){
var first=0, last=0, first1=0, last1=0, contL=0, ary=[];
first=str.indexOf(str1);
last=str.lastIndexOf(str1);
ary=str.split("","");

if(str.includes(str1)){
    if(first===last){
      first++;
      last++;
        if((str.length-last)>first){
            return 1;
      }if((str.length-last)===first){
        return "draw";
      }else{
        return -1;
      }
    }else{
      first++;
      last++;
      if((str.length-last)+1===first){
          return "draw";
    }if((str.length-last)<first){
      return -1
    }else{
      return 1;
    }
    }
}else{
  return undefined;
}//end if(str.includes(str1))
}

console.log(closerIndex("anita lav1a1 la tina ","1"));
