"use strict"

console.log("EJEMPLO 1\n")

var ary=[2, 5, , 9,6, ,10,'s', ,[2,3,'s']];

function logArrayElements(element, index, array, l) {
    console.log("a[" + index + "] = " + element+ l);
}

ary.forEach(logArrayElements);

console.log("\n EJEMPLO 2 \n")

var ary=[2, 5, , 9,6, ,10,'s', ,[2,3,'s']];

function logArrayElements(index, element, array) {
    console.log("a[" + index + "] = " + element);
}

var a=ary.forEach(logArrayElements);

console.log(a);


console.log("\n EJEMPLO 3\n")

var numbers=[10,11,12];

var suma=0;

numbers.forEach(
    function addNumber(value){
      suma+=value;
    }
)

console.log(suma);
