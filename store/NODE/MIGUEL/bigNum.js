"use strict"

// Ejercicio numero 2 de Numeros
// Write a function called howBigNumberIs which takes 3 parameters, every one of
// them are strings, that can be or can be not a number, so the function have to
// validate that, the function will execute a Exponentiation, first is going to be
// the bigger one powered by the smaller one, and then the result powered by the
// last one. if one of the numbers is NaN the function will return NaN.
// If the result is a safe integer the function will return ‘Ok’, if the number is
// not safe it have to return ‘Warning’ but if the number is Infinity function
// have to return ‘To much’

// Nop solo Math.pow
// example for the number two?
// howBigNumberIs(2, 4, 1) //16
// howBigNumberIs(2, 4, 3) //4096


function howBigNumberIs(a,b,c){

var ary=[], pow1=0, pow2=0, result=0;

a=+a;
b=+b;
c=+c;

if((Number.isInteger(a)===false)||(Number.isInteger(b)===false)||(Number.isInteger(c)===false)){
	console.log("THERE IS A INVALID PARAMETER");
	return NaN;
}

if((a>b)&&(a>c)){
	if(b>c){
		pow1=Math.pow(a,c);
		pow2=Math.pow(pow1,b);
	}else{
		pow1=Math.pow(a,b);
		pow2=Math.pow(pow1,c);
	}

	if(isFinite(pow2)){
		if(Number.isSafeInteger(pow2)){
			return "ok";
		}else{
			return "warning";
		}
	}else{
		return pow2;
		}
	}

if((b>a)&&(b>c)){
	if(b>c){
		pow1=Math.pow(b,c);
		pow2=Math.pow(pow1,a);
	}else{
		pow1=Math.pow(b,a);
		pow2=Math.pow(pow1,c);
	}

	if(isFinite(pow2)){
		if(Number.isSafeInteger(pow2)){
			return "ok";
		}else{
			return "warning";
		}
	}else{
		return pow2;
		}	
	}

if((c>a)&&(c>b)){
	if(c>a){
		pow1=Math.pow(c,b);
		pow2=Math.pow(pow1,a);
	}else{
		pow1=Math.pow(c,a);
		pow2=Math.pow(pow1,b);
	}
	
	if(isFinite(pow2)){
		if(Number.isSafeInteger(pow2)){
			return "ok";
		}else{
			return "warning";
		}
	}else{
		return pow2;
		}	
	}
}

console.log(howBigNumberIs('100','70','10'));