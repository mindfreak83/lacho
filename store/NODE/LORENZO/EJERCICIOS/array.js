"use strict"

function squareSum(ary){

  var x = 0, temp=0, ary2=[];

  for(x=0; x<ary.length; x++){
      temp+=ary[x]*ary[x];
      ary2[x]=ary[x]*ary[x];
      //console.log(temp);
  }
console.log("The square of each element into the array: ", ary2);
return temp;
}

console.log("The sum of each element into the square array is: ",squareSum([1,2,2,4,5]));
