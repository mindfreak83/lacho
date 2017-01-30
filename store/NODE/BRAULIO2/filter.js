/**
 * FILTER !!
 * Created by EDDY , MIGUEL on 02/09/2016.
 */
var raza = [
 {
  "_id": "57c9ed8f9cec1da7822c14de",
  "age": 30,
  "eyeColor": "brown",
  "name": "Potts Armstrong"
 },
 {
  "_id": "57c9ed8f02d59699ca81688e",
  "age": 25,
  "eyeColor": "green",
  "name": "Curtis Brewer"
 },
 {
  "_id": "57c9ed8fb9d7d18294f9f13e",
  "age": 38,
  "eyeColor": "brown",
  "name": "Vincent Conley"
 },
 {
  "_id": "57c9ed8f7b73575720ce14c1",
  "age": 35,
  "eyeColor": "green",
  "name": "Melisa Salas"
 },
 {
  "_id": "57c9ed8f721f65c365cf80f8",
  "age": 31,
  "eyeColor": "blue",
  "name": "Claudine Gilmore"
 },
 {
  "_id": "57c9ed8f2c7f2ec0f2b9595b",
  "age": 32,
  "eyeColor": "blue",
  "name": "Gross Harris"
 }
];
var secuencia = ["lols", "potato", "more stuff", "potato", "potatota", "potato", "other", "trololo"];

var people = raza.filter (busqueda);

function busqueda (param) { //#1 find people that has "blue eye color and also has more than 31 years old" //# 2 find who is older than 25 years
 // old
 //return param.age > 25; // <-- use this for the omore than 25 years
 return param.eyeColor === "blue" && param.age > 31; //blue eyes and more than 31 years old
}

console.log (people);
function potato (param) { //find potato
 return param === "potato";
}

console.log (secuencia.filter (potato).length+'  potatoes'); //find how many potatoes are in this array errase ".lengh" if you want to see the potatoes

// very useful method !! *_*
