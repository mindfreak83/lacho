"use strict"


function sumAllArrays(ary){
  var sum=0;

  if (Array.isArray(ary) !== true) {
      return false;
    } else {
       if (ary.length < 1){
          return ary[x];
        } else {
            for (var x = 0; x < ary.length; x++){
                  if (Array.isArray(ary[x])){
                      sum += sumAllArrays(ary[x]);
                    } else {
                      if(typeof ary[x] === 'number'){
                          sum += ary[x];
                      }
                    }
              }
              return sum;
          }
      }
  }

console.log(sumAllArrays([1,2,[3,'5',['',4,[{},4,[7]]]]]));

console.log(sumAllArrays(["1,2,[3,'5',['',4,[{},4,[7]]]]"]));

console.log(sumAllArrays(3));
