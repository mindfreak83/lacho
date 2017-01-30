"use strict"

var rev= ["puto", "presta", "party"];
var revTemp1="";
var revTemp2="";
var z;

for(var x=0; x<rev.length; x++){

	if (rev[x].length>=5) {
		console.log(rev[x]);
		revTemp1=rev[x];
		//revTemp2=rev[x];
		console.log(revTemp2);
		z=revTemp1.length-1;
		console.log(z);
	for( var y=0 ; y<revTemp1.length ; y++ ){
		 revTemp2[y]=revTemp2[y]+revTemp1[z];
		 console.log(revTemp2[y]);
		 console.log(revTemp2[y], y, revTemp1[z], z);	
		 z--;	
		}
		for (var i = 0; i < revTemp2.length; i++) {
			  console.log(revTemp2[i]);
		}
		rev[x]+=revTemp2;
		console.log(revTemp2);
	}

}
//console.log(rev[0].length);