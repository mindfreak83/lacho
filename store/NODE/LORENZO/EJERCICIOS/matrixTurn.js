"use strict"

var m=[[1,2,3],[4,5,6],[7,8,9]], m2=[[1,2,3],[4,5,6]], m3=[[1,2],[2,3],[3,4]];
var m4=[[1,2],[3,4]], m5=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

function rotate(n){
	var x=0, y=0, ary=[[],[],[],[]], temp=0, ary2=[];
	//console.log(Array.isArray(n));

	if(Array.isArray(n)===true){
			while(n[x]){
			 x++;
			}
			while(n[0][y]){
			 y++;
			}
			if(x!==y){
			 return "The matrix is not square";
			}else{
			 temp=x;
			 y-=1;
			 for(var z=0; z<temp ; z++){
				 for(var w=0; w<temp ; w++){
					 ary[w][y]=n[z][w];
				 }
				 y--;
			 }
			return ary;
			}
	}else{
		return false;
	 }
}
console.log(rotate("s"));
console.log(rotate(1));
console.log(rotate(true));
console.log(rotate({retorno:4}));
console.log(rotate(m));
console.log(rotate(m2));
console.log(rotate(m3));
console.log(rotate(m4));
console.log(rotate(m5));
