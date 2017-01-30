"use strict"

console.log("\n OPERADORES ARITMETICOS");

console.log("\n OPERADOR DE ADICIÓN\n");

var x=2, y=6, z=0;

z=x+y;

console.log("la variable Y vale 6, la variable X vale 2 y se suman esos valores en Z: ", z);

console.log("\n OPERADOR DE SUSTRACCIÓN\n");

z=y-x;

console.log("la variable Y vale 6, la variable X vale 2 y se suman esos valores en Z: ", z);

console.log("\n OPERADOR DE DIVISIÓN\n");

z=y/x;

console.log("la variable Y vale 6, la variable X vale 2 y se dividen esos valores en Z: ", z);

console.log("\n OPERADOR DE MULTIPLICACIÓN\n");

z=y*x;

console.log("la variable Y vale 6, la variable X vale 2 y se multiplican esos valores en Z: ", z);

console.log("\n OPERADOR DE RESIDUO\n");

z=y%x;

console.log("la variable Y vale 6, la variable X vale 2 y se obtiene el residuo de esos valores en Z: ", z);

console.log("\n OPERADOR DE INCREMENTO\n");

var i=0;
i++;
console.log("la variable 'i' vale 0 y se incrementa uno con la siguiente expresión 'i++', entonces i vale: "+ i++);

console.log("\n OPERADOR DE DECREMENTO\n");

var i=6;
i--;
console.log("la variable 'i' vale 6 y se decrementa uno con la siguiente expresión 'i++', entonces i vale: "+ i++);

console.log("\n OPERADOR UNARIO NEGATIVO\n");

var i=6;
i=-i;
console.log("la variable 'i' vale 6 y se le asigna el operador unario '-i', entonces i vale: "+ i);

i=-true;
console.log("la variable 'i' vale 6 y se le asigna el operador unario '-true', entonces i vale: "+ i+"\n");

i=-false;
console.log("la variable 'i' vale -1 y se le asigna el operador unario '+false', entonces i vale: "+ i +"\n");

console.log("\n OPERADOR UNARIO POSITIVO\n");

i=+i;
console.log("la variable '-i' vale 0 y se le asigna el operador unario '+i', entonces i vale: "+ i+"\n");

i=+true;
console.log("la variable 'i' vale 0 y se le asigna el operador unario '+true', entonces i vale: "+ i+"\n");

i=+false;
console.log("la variable 'i' vale 1 y se le asigna el operador unario '+false', entonces i vale: "+ i +"\n");
