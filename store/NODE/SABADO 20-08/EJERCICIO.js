"use strict"

var message = "ooooo";
var message1= "";
var pos;

/*message1 = message.replace('o','u');

console.log(message1);

pos = message.indexOf('o');

console.log(pos);

message = "hola mundo";
message1= "";*/

//message1 = message.replace('o','u');
do{

	message = message.replace('o','u');
	console.log(message);

}while(message.indexOf('o')!= -1);