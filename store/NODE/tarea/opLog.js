"use strict"

console.log("OPERADORES LÓGICOS AND &&");

var a1, a2, a3, a4, a5;

a1 = true  && true      // t && t regresa true

console.log ("la variable a1 se asigna la comparación 'true  && true' y el valor es: ", a1);

a2 = true  && false     // t && f regresa false

console.log ("la variable a2 se asigna la comparación 'true  && false' y el valor es: ", a2);

a3 = false && true      // f && t regresa false

console.log ("la variable a3 se asigna la comparación 'false  && true' y el valor es: ", a3);

a4 = false && (3 == 4)  // f && f regresa false

console.log ("la variable a4 se asigna la comparación 'true  && (3 == 4)' y el valor es: ", a4);

a5 = "Cat" && "Dog"     // t && t regresa "Dog"

console.log ("la variable a5 se asigna la comparación 'true  && Cat && Dog' y el valor es: ", a5);

console.log("OPERADORES LÓGICOS OR ||");

var a1, a2, a3, a4, a5;

a1 = true  || true      // t && t regresa true

console.log ("la variable a1 se asigna la comparación 'true  || true' y el valor es: ", a1);

a2 = true  || false     // t && f regresa true

console.log ("la variable a2 se asigna la comparación 'true  || false' y el valor es: ", a2);

a3 = false || true      // f && t regresa true

console.log ("la variable a3 se asigna la comparación 'false  || true' y el valor es: ", a3);

a4 = false || (3 == 4)  // f && f regresa false

console.log ("la variable a4 se asigna la comparación 'true  && (3 == 4)' y el valor es: ", a4);

a5 = "Cat" || "Dog"     // t && t regresa "Cat"

console.log ("la variable a5 se asigna la comparación 'true  && Cat && Dog' y el valor es: ", a5);

console.log("OPERADORES LÓGICOS NOT !");

var n1, n2, n3;

n1 = !true              // !t regresa false

console.log("La variable n1 se le asigna el valor de !true, así que n1 vale: ", n1);

n2 = !false             // !f regresa true

console.log("La variable n2 se le asigna el valor de !false, así que n2 vale: ", n2);

n3 = !"Cat"             // !t regresa false

console.log("La variable n2 se le asigna el valor de !'Cat', así que n3 vale: ", n3);
