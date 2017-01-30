"use strict"

// Create a function called calc which takes 3 parameters, the first and second
// one are string than can or can not be a number, so the function have to validate
// if they are valid numbers, and the third parameter will be a string with
// 4 posibles operations “+” or “-“ or “*” or “/“, (if the third param is not a
// valid operator return a string with ‘invalid parameter’) in base to that
// realise the operation and return the value, if one of the parameters are
// NaN return NaN

function calc(a,b,c){

var val="", result=0;

a=+a;
b=+b;

if((c==='*')||(c==='/')||(c==='+')||(c==='-')){
	if((Number.isInteger(a)===false)||(Number.isInteger(b)===false)){
		console.log("THERE IS A INVALID PARAMETER");
	}

	switch(c){
		case "+": result=a+b; break;
		case "-": result=a-b; break;
		case "*": result=a*b; break;
		case "/": result=a/b; break;
	}

	return result;
}else{
	return "INVALID PARAMETER";
}

}

console.log(calc('1t1','2','+'));
