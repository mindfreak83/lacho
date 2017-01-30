"use strict"

function f() {
  return Array.from(arguments);
}

console.log(" from 1 ", f(1, 2, 3));

var s = new Set(["foo", "window"]);
console.log(" from 2 ",Array.from(s));

var m = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(m));

var c=Array.from({length: 5}, (v, k) => console.log(k));
console.log(c);
