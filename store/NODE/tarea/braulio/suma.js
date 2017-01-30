"use strict"

var res=0, res2=0, res3=0, temp=0;
var den=1;

function sec(n){											//función
  for(var x=1; x<=n; x++){
      res+=(1/den);
      //console.log(res3);
      console.log("\nResultado de la iteración "+ x +" con 2 decimales: "+ res.toFixed(2));
     den+=3;
     }

  res2+= res.toFixed(2);

  for(var y=0; y<res2; y++){
  	   if(res2>=1){
  	   		res2--;
  	   }
  }
  //console.log(res3);
  res2=res2.toFixed(2);
  //console.log(res2);
  res2*=100;
  //console.log(res2);

  if((100%res2)===0){
  		temp=100/res2;
		console.log("\nResultado en fracción "+ res2 + "/"+ 100);
		console.log("\nResultado en fracción simplificada "+ 1 + "/"+ temp);
  		}else{
  		console.log("\nResultado en fracción "+res2 + "/"+ 100);
  		}
  		
  }
  
sec(21);
