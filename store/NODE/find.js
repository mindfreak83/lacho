"use strict"

var foo = [1,2,{name:"John",children:[{name:"Casey",age:5},{name:"John jr.",age:10,toys:[{toyName:"BuzzLightYear",price:"$25"},{toyName:"TRex", price:"$20"}]}],age:25}];

console.log(foo[0]+"\n");
console.log(foo[1]+"\n");
console.log(foo[2]);
console.log("\n"+foo[2].name);
console.log(foo[2].children);
console.log(foo[2].children[0]);
console.log("\n"+foo[2].children[0].name);
console.log("\n"+foo[2].children[0].age);
console.log(foo[2].children[1]);
console.log("\n"+foo[2].children[1].name);
console.log("\n"+foo[2].children[1].age);
console.log(foo[2].children[1].toys);
console.log(foo[2].children[1].toys[0]);
console.log("\n"+foo[2].children[1].toys[0].toyName);
console.log("\n"+foo[2].children[1].toys[0].price);
console.log(foo[2].children[1].toys[1]);
console.log("\n"+foo[2].children[1].toys[1].toyName);
console.log("\n"+foo[2].children[1].toys[1].price);
console.log("\n"+foo[2].age);

//console.log(foo[2][1]);