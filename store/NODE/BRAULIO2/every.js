"use strict"

function esMayor(elemento){
  console.log(elemento);
  return elemento>=10;
}


var filtrados=[18,19,9,21,22];

filtrados.every(esMayor);
