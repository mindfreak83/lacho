"use strict"
//ej 4) usar sort para ordenar por color de ojos y nombre
 var obj = [
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
]

function ord(){
  var val=0, a, b, val1=0;
  obj=obj.sort(orden);
  obj=obj.sort(orden2)
return obj;
}
var x=ord();
console.log(x);


function orden(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}

function orden2(a, b) {
  if (a.eyeColor > b.eyeColor) {
    return 1;
  }
  if (a.eyeColor < b.eyeColor) {
    return -1;
  }
  return 0;
}
