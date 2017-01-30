"use strict"

console.log("\n OPERADOR DE CONCATENACIÓN\n");

var str="Cadena1 ", str2="cadena2", str3="";

str3=str+str2;

console.log("Hay dos variable 'str y str2' se concatenan mediante el operador '+': ", str3);

console.log("\n OPERADOR TERNARIO\n");

var x;
x= (1<2) ? 'si' : 'no'; console.log(" Usando operdor ternario en la expresión 'x= (1<2) ? 'si' : 'no', el resultado es: ",x ,"\n");

x= ( true === false) ? '1' : '2'; console.log(" Usando operdor ternario en la expresion x= (TRUE === FALSE) ? '1' : '2', el resultado es: ",x, "\n");

x= ( true !== false) ? '1' : '2'; console.log(" Usando operdor ternario en la expresion x= (TRUE !== FALSE) ? '1' : '2', el resultado es: ",x, "\n");

x= ( x > 1) ? 'mayor que 1' : 'no mayor que 1'; console.log(" Usando operdor ternario en la expresion x= ( x > 1) ? 'mayor que 1' : 'no mayor que 1', el resultado es: ",x, "\n");

x= ( x !== 1) ? console.log("usando operador ternario") : console.log('no mayor que 2');

console.log("\n OPERADOR DELETE\n");
y;
x=42;
var y=42;
var myObj ={h:4, k:5};
//delete x;
console.log("En la expresión 'delete x;' x es global y vale 42, el resultado es: true \n");

console.log("En la expresión 'delete y;' y es var y vale 42, el resultado es: false \n");

console.log("En la expresión 'delete Math.PI;' el resultado es: false \n");

console.log("En la expresión 'delete myObj.h;' el resultado es: true \n");

console.log("\n OPERADOR COMMA\n");

//var a = b = 3, c = 4;

console.log("en la expresión 'a = b = 3, c = 4;' a vale: 3 \n");

// x = (y = 5, z = 6)

console.log("En la expresión 'x = (y = 5, z = 6)' x vale: 6 \n");

console.log("\n TYPEOF\n");

var str="";
str=typeof 37;
console.log("En la expresión 'str=typeof 37', "+str+"\n");

str=typeof '37';
console.log("En la expresión 'str=typeof '37'', "+str+"\n");

str=typeof Infinity;
console.log("En la expresión 'str=typeof Infinity, "+str+"\n");

str=typeof NaN;
console.log("En la expresión 'str=typeof NaN, "+str+"\n");

str=typeof function (){};
console.log("En la expresión str=typeof function (){}, "+str+"\n");

str=typeof true;
console.log("En la expresión str=typeof true, "+str+"\n");

str=typeof Symbol();
console.log("En la expresión str=typeof Symbol(), "+str+"\n");

str=typeof undefined;
console.log("En la expresión str=typeof undefined, "+str+"\n");

str=typeof {};
console.log("En la expresión str=typeof {}, "+str+"\n");

str=typeof null;
console.log("En la expresión str=typeof null, "+str+"\n");

str=typeof class c{};
console.log("En la expresión str=typeof class c{}, "+str+"\n");

console.log("\n VOID\n");

var x=void (5);

console.log("En la expresión 'var x=void (5); la variable es: ' ",x,"\n");

console.log("En la expresión 'x+x', donde x = void, el resultado es: ", x+x, "\n");

console.log("\n INSTANCEOF\n");

function c(){};
function d(){};
var x, o = new c();

x=o instanceof c;
console.log("En la expresión 'x=o instanceof c;', devuelve: "+x+" por que fue creada de la función c()");

x=o instanceof d;
console.log("En la expresión 'x=o instanceof d;', devuelve: "+x+" por que no fue creada de la función d()");

console.log("\n IN\n");

var ary=["cars",true,"5",1.25,"",4], x;

x= 4 in ary;

console.log("En la expresión 'x= 4 in ary;', x devuelve: "+x+" por que el valor se encuentra en el array \n");

var x= "cars" in ary;

console.log("En la expresión 'x= cars in ary;', x devuelve: "+x+" por que el valor se encuentra en el array \n");

var x= 1.25 in ary;

console.log("En la expresión 'x= 1.25 in ary;', x devuelve: "+x+" por que el valor se encuentra en el array \n");

var x= "length" in ary;

console.log("En la expresión 'x= length in ary;', x devuelve: "+x+" por que el valor se encuentra en el array \n");

console.log("Todo esto por que la palabra 'in' solo trabaja con los index del arreglo, no con su valores");
