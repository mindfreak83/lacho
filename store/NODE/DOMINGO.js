

function dividir ( a, b){
if(typeof a ==='number' && typeof b ==='number')
{
	if(b===0)
		throw new Error("hello muther fucker");
	
		return a/b;
}else{
 console.log("los valores no son numéricos");	
}
}

try
{
console.log(dividir('10',5));
console.log(dividir(10,'a'));
console.log(dividir(10,2));
}catch (e)
{
			console.log(e);	
	}
finally {
	console.log("mail muther fucker");
}
console.log('10'/2);
console.log('10'-2);
console.log('10'+2);
console.log('10'*2);
console.log(2+'10');
console.log('10'==10);
console.log('10'===10);