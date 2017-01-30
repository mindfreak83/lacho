"use strict"

function esSuficientementeGrande(elemento, indice, arrreglo) {
  return elemento >= 10;
}
console.log([12, 5, 8, 130, 44].every(esSuficientementeGrande));
console.log([12, 54, 18, 130, 44].every(esSuficientementeGrande));

console.log([12, 5, 8, 130, 44].every(elem => elem >= 10)); // false
console.log([12, 54, 18, 130, 44].every(elem => elem >= 10));
