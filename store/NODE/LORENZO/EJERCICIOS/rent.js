"use strict"

function getTotal(days){

var total = 0, cost = 40, costOff1 = 20, costOff2=50;

if((days>0)&&(days<3)){
  total=days*cost;
}

if((days>=3)&&(days<7)){
  total=(days*cost)-costOff1;
  console.log("Your total cost is: $",(days*cost)," less $20 off");
}

if(days>=7){
  total=(days*cost)-costOff2;
  console.log("Your total cost is: $",(days*cost)," less $50 off");
}


return total;
}

console.log("The total cost of your rent is: $",getTotal(10));
