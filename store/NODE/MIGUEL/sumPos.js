"use strict"

// Ejercicio numero tres y ultimo de números
// You will write a function called sumPositivesAndNegatives which takes only one
// parameter is going to be an array with miscellaneous variables, they can be
// string, number, objects, arrays and booleans.
// If is an string, number or boolean, try to convert it to number, if is a number,
// add it to the sum, if not ignore it, if the object is an instance of  number or
// string try to convert it to number and add it as well.
// If is an array  you have to check all the index of that array as well to sum.
// The function have to return an array with two spaces, the first one is the sum
// of all of the positive numbers and the second one the sum of all the negatives
// numbers.
//
// x = new Number(1)
// s = new String(-22)
// sumPositivesAndNegatives([1, -2, x, s, [1, -6, -2], true ]) // [4, -32]

let r;

function sumPositivesAndNegatives(ary){

//console.log(ary);

let temp=0 ;

for (let x=0; x<ary.length; x++){
    console.log(ary[x], typeof(ary[x]), ary[x].length, Number.isInteger[ary[x]], ary[x].valueof, ary[x] instanceof Number);

}

console.log(ary[7].cantidad,ary[7].cantidad instanceof Number);

}

r=sumPositivesAndNegatives([1,"s",[23,4,65],-1,true,false,{nombre:"john", edad:34},{cantidad: 4}, "lkmxlksmd"]);
