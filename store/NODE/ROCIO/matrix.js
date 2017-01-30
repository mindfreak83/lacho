"use strict"

function matrix(){

var mA=[[1,2,3],[4,5,6]], mB=[[1,2],[3,4],[5,6]], mC=[[],[]], z=0, a=0, b=0, c=0, mAlnth=0, mBlnth=0, mClnth=0;

var temp=0, w=0, x=0;

mAlnth=mA.length; //Obtain in mAlnth vertical size of mA array
//console.log("v ma",mAlnth);
mBlnth=mB.length; //Obtain in mBlnth vertical size of mB array

z=obtH(mAlnth, mA);
//console.log("h ma",z);
w=obtH(mBlnth, mB);
//console.log("h mb",w);
//console.log(mAlnth, mBlnth); //just checking
for(a=0; a<mAlnth; a++){	   //for to iterate 'n' times vertical length of A matrix	
	for(b=0; b<z-1; b++){		   //for to iterate 'n' times horizontal length of B matrix
		temp=0;				   //
		for(c=0; c<mBlnth; c++){	//for to iterate 'n' times vertical length of B matrix
			temp += (mA[a][c]*mB[c][b]); //matrix multiplication and adding in a temporal var
			}
		mC[a][b]=temp;		   //saving the temp value in C matrix: RESULTING MATRIX.
	}
}
mClnth=mC.length;
x=obtH(mClnth, mC);
console.log("Matriz A: ");
impM(mAlnth, z, mA);
console.log("Matriz B: ");
impM(mBlnth, w, mB);
console.log("Matriz C RESULANTE: ");
impM(mClnth, x, mC);
}

function obtH(n, m){
	var z=0;
for(var a=0; a<=n; a++){	//Obtain in z horizontal size of array
	if(m[0][a]){	//if to find horizontal length of matrix, if it finds NULL stop counting.
		z++;				// 
		//console.log(m[0][a]);	// just checking
		}	
}
return z;
}

function impM(n, m, o){
	//console.log(n,m,o);
	var mCstr=[[],[],[]];
	for (var a=0; a<n; a++){
		for(var b=0; b<m; b++){
			mCstr[a][b]=o[a][b].toString();
			//console.log(a,b, o[a][b]);
		}
		console.log(mCstr[a]);
	}
}

matrix();