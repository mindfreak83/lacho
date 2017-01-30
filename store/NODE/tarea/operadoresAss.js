"use strict"

console.log("\n ASIGNACIÓN\n");

var x=9;

console.log("1.- el valor "+ x +" se asigna a la variable X: x <- 9\n");

var y=5;

console.log("2.-el valor "+ y +" se asigna a la variable Y: y <- 5\n");

var z=6;

console.log("3.-el valor "+ z +" se asigna a la variable Z: z <- 6\n");

var w=4;

console.log("4.-el valor "+ w +" se asigna a la variable W: w <- 4\n");

var i=67;

console.log("4.-el valor "+ i +" se asigna a la variable I: i <- 67\n");

console.log("\n ASIGNACIÓN DE SUMA\n");

var x=9, y='pere', z=true;

x+=2;

console.log("1.-X de inicio vale 9 y se le suma 2: x+=2, x vale ", x);

y+=2;

console.log("\n2.-Y de inicio vale 'pere' y se le suma 2: y+=2, y vale ", y);

z+=2;

console.log("\n3.-Z de inicio vale true y se le suma 2: z+=2, z vale ", z);

y+=false;

console.log("\n4.-Y de inicio vale 'pere2' y se le suma false: y+=false, y vale ", y);

z+=false;

console.log("\n5.-Z de inicio vale 3 y se le suma false: z+=false, z vale ", z);

console.log("\n ASIGNACIÓN DE RESTA\n");

var x=9, y=false, z='aqui';

x-=2;

console.log("1.- X de inicio vale 9 y se le resta 2: x-=2, x vale ", x);

y-=2;

console.log("\n2.- Y de inicio vale false y se le resta 2: y-=2, y vale ", y);

z-=2;

console.log("\n3.- Z de inicio vale 'aqui' y se le resta 2: y-=2, z vale ", z);

y-=false;

console.log("\n4.- Y de inicio vale "+ y +" y se le resta false: y-=false, y vale ", y);

z-=false;

console.log("\n5.- Z de inicio vale "+ z +" y se le resta false: z-=false, z vale ", z);

console.log("\n ASIGNACIÓN DE MULTIPLICACIÓN\n");

var x=8, z="foo";

x*=2;

console.log("1.- X de inicio vale 8 y se le multiplica 2: x*=2, x vale ", x);

z*=2;

console.log("\n2.- Z de inicio vale 'foo' y se le multiplica 2: z*=2, z vale ", z);

z*=3;

console.log("\n3.- Z de inicio vale "+ z +" y se le multiplica 3: z*=2, z vale ", z);

console.log("\n ASIGNACIÓN DE DIVISIÓN\n");

var x=6, y=9;

x/=2;

console.log("1.- X de inicio vale 6 y se le divide 2: x/=2, x vale ", x);

x/="bazz";

console.log("\n2.- X de inicio vale 3 y se le divide 'bazz': x/=bazz, x vale ", x);

y/=0;

console.log("\n3.- Y de inicio vale 9 y se le divide 0: y/=0, y vale ", y);

console.log("\n ASIGNACIÓN DE RESIDUO\n");

var x=9, y=5;

x%=2;

console.log("1.- X de inicio vale 9 y se obtiene el módulo entre 2: x%=2, x vale ", x);

x%="bazz";

console.log("\n2.- X de inicio vale 1 y se obtiene el módulo entre 'bazz': x/=bazz, x vale ", x);

y%=0;

console.log("\n3.- Y de inicio vale 5 y se obtiene el módulo entre 0: y/=0, y vale ", y);

console.log("\n ASIGNACIÓN DE EXPONENCIACIÓN\n");

var x=8;

//x **= 2; Exponenciaión.
