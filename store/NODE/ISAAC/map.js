"use strict"

//funcionamiento de map

var personas=[{name: "Sergio Rivera", age: 29},
              {name: "Sergio Bailador", age: 31},
              {name: "Sergio Tavera", age: 50},
              {name: "Sergio Vargas", age: 45}];

function myMap(array, separarNombre){
  var nAry=[];

  for(var i=0; i<array.length; i++){
    nAry.push( separarNombre(array[i], i, array));
  }
  return nAry;


function separarNombre( persona ){
  let fullName = persona.name.split(" ");
  return{
    firstName: fullName[0],
    lastName: fullName[1],
    age: persona.age
  };
}

}
console.log(myMap(personas));
