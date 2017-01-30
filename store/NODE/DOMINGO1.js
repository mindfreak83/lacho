//EJERCICIO1

/*function suma(a,b,c){
	return a+b+c;
}
console.log(suma(1,3));
console.log(suma(6,5,3));
console.log(typeof c);*/

//EJERCICIO2

/*function suma(){
	console.log(arguments);
}

suma();
suma(1,2,3);
suma(10, 20, 30, 40, 50);*/

//EJERCICIO3
/*function suma(){
var temp=0;
for( var i in arguments)
{
	temp+=arguments[i];
}

console.log(temp);
}
suma();
suma(1,2,3);
suma(10, 20, 30, 40, 50);*/

function pal(string){
var temp="";
var y=0;

string=string.replace(/ /g,"")
console.log(string);

for(x=string.length-1;x>=0;x--)
{
	temp+=string[x];
	console.log(string[y], temp[y]);
	y++;
}
if (temp===string)
	console.log("la cadena "+ string +" es palindroma");
	else
		console.log("la cadena "+ string +" no es palindroma");


}
pal('s');
pal('abba');
pal('oso');
pal('osa');
pal('ac');
pal('reconocer');
pal('radar');
pal('anita lava la tina');