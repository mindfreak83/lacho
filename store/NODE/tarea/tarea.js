//Examples Assignment
var x=1; // undefined
var x=2, y=x;//undefined
x=2, y=x;//2
var palabra= 'hola';//undefined
palabra='palabra';//'palabra'


//Examples Addition assignment
var x= 1, y=2, x=x+y;//undefined
x= 1, y=2; x=x+y;//3
var x= 1, y=2; x+=y;//3
x= 1, y=2; x+=y;//3
palabra1="hola ", palabra2='olegario'; palabra1+=palabra2;//´hola olegario´


//Examples Subtraction assignment
var x= 4, y=2, x=x-y;//undefined
x= 4, y=2, x=x-y;//2
var x= 4, y=2; x-=y;//2
x= 4, y=2; x-=y;//2
x="hola", y="nada"; x-=y;//NaN


//Examples Multiplication assignment
var x=1, y=2, x= x*y;//undefined
x=1, y=2, x= x*y;//2
var x=1, y=2; x*=y;//2
x=1, y=2, x*=y;//2
x="uno", y="uno"; x*=y;//NaN


//Examples Division assignment
var x=10, y=2; x= x/y;//5
x=10, y=2, x= x*y;//5
var x=10, y=2; x/=y;//5
x=10, y=2, x/=y;//5
x="uno", y="dos"; x/=y;//NaN


//Examples Remainder assignment
var x=10, y=2, x= x%y;//undefined
var x=10, y=2; x= x%y;//0
x=10, y=2, x= x%y;//0
var x=10, y=2; x%=y;//0
x=10, y=2, x%=y;//0
x="nada", y="vacio"; x%=y;//NaN


//Examples Exponentiation assignment   La consola solo me mostraba puntos suspensivos y no pude corroborar los resultados
var x=2, y=3, x= x**y;//undefined
var x=2, y=3; x= x**y;//8
x=2, y=3, x= x**y;//8
var x=2, y=3; x**=y;//8
x=2, y=3, x**=y;//8
x="nada", y="vacio"; x**=y;//NaN

/*
//Examples Left shift assignment
var x=1, y=2, x= x<<y;//undefined
var x=1, y=2; x= x<<y;//4
x=1, y=2, x= x<<y;//4
var x=1, y=2; x<<=y;//4
x=1, y=2, x<<=y;//4


//Examples Rigth shift assignment
var x=1, y=2, x= x>>y;//undefined
var x=1, y=2; x= x>>y;//0
x=1, y=2, x= x>>y;//0
var x=1, y=2; x>>=y;//0
x=1, y=2, x>>=y;//o*/


//Examples Equal
1==2;//false
2==2;//true
2=="2";//true
"uno"=="dos";//false
"equal"=="equal";//true


//Examples Not Equal
2!=3;//true
5!=5;//false
10!="10"//false
"uno"!="dos"//true
"equal"!="equal"//false


//Examples Strict Equal
1===2;//false
2===2;//true
2==="2";//false
"uno"==="dos";//false
"equal"==="equal";//true


//Examples Strict Not Equal
2!==3;//true
5!==5;//false
10!=="10"//true
"uno"!=="dos"//true
"equal"!=="equal"//false


//Examples Greater than
2>3;//false
5>5;//false
6>1//true
10>"10"//false
"uno">"dos"//true   aqui no me queda claro porque me da true


//Examples Greater than or equal
2>=3;//false
5>=5;//true
6>=1//true
10>="10"//true
"uno">="dos"//true   aqui no me queda claro porque me da true


//Examples Less than
2<3;//true
5<5;//false
6<1//false
10<"10"//false
"uno"<"dos"//false


//Examples Less than or equal
2<=3;//true
5<=5;//true
6<=1//false
10<="10"//true
"uno"<="dos"//false


//Examples Addition
1+1;//2
5+2;//7
"6"+1//'61'
10+"10"//'1010'
"uno"+"Dos"//'unoDos'


//Examples Substraction
1-1;//0
5-2;//3
"6"-1//5
10-"10"//0
"uno"-"Dos"//NaN


//Examples Multiplication
1*1;//1
5*2;//10
"6"*1//6
10*"10"//100
"uno"*"Dos"//NaN


//Examples Division
1/1;//1
5/6;//0.83
"6"/1//6
10/"10"//1
"uno"/"dos"//NaN


//Examples Remainder
1%1;//0
5%6;//5
"6"%1//0
10%"10"//0
"uno"%"dos"//NaN

//Examples Increment
var x=1;++x;//2
var x=1;x++;//1
var x="1"; ++x;//2
var x="1"; x++;//1
var x="uno"; x++;//NaN


//Examples Decrement
var x=2;--x;//1
var x=2;x--;//2
var x="2"; --x;//1
var x="2"; x--;//2
var x="uno"; x--;//NaN


//Examples Unary Negation
var x=2;-x;//-2
var x=5;-x;//-5
var x="2"; -x;//-2
var x="23"; -x;//-23
var x="uno"; -x;//NaN


//Examples Exponentiation     La consola solo me mostraba puntos suspensivos y no pude corroborar los resultados
2**3;//8
5**0;//1
"2"**3;//8
2**"3";//8
"uno"**2;//NaN


//Examoples Logical AND
true && true;//true
0 && undefined;//0
false && true;//false
NaN && true;//NaN
1 && 2; //2


//Examoples Logical OR
true || true;//true
0 || undefined;//undefined
false || true;//true
NaN || true;//true
1 || 2; //1


//Examples Logical NOT
x = !3;//false
x = !true;//false
x = !false;//true
x = !NaN;//true
x = 0;//true


//Examples Concatenation Operator
x="2", x+x;//'22'
"5" + "x";//'5x'
"100" + "2";//'1002'
"+" + "23";//'+23'
"uno" + "Dos";//'unoDos'


//Examples Conditional Ternary Operator
true ? 1:2;//1
false ? 1:2;//2
6<1 ? "true":"false"//'false'
"uno" ? "true":"false"//'true'
NaN > null ? 5 : 6//6


//Examples Comma Operator
i=2, x=5;//5
i="X", x="Y";//'Y'
i="X", x="Y", s=3;//3
undefined , NaN;//NaN
1,2,3,4,5,6;//6


//Examples Unary Operators Delete
const w=3; var t=5; val="valor";
delete w;//false -------->3
delete t;//false -------->5
delete val;//true ------->error
delete Math.PI;//false--->3.1416........
delete global;//true----->error


//Examples Unary Operators Typeof
const w=3; var t=5; val="valor";
typeof w;//'number'
typeof t;//'number'
typeof val;//'string'
typeof Math.PI;//'number'
typeof global;//´undefined´


//Examples Unary Operators Void       este comando se supone que hace algo como un link pero tanto en node como en chrome me muestra "undefined"
const w=3; var t=5; val="valor";
void(w);//'3'
void(t);//'5'
void(null);//'null'
void(Boolean);//'Boolean'
void(Math.PI);//´Math.PI´


//Examples Relational Operator In
var t=5, val="valor", k=[1,2,3,4], e={uno:1, dos:3};
5 in t;//error
"length" in val;//error
"length" in k;//true
0 in k;//true
"uno" in e;//true


//Examples Relational Operator Instanceof
var t=5, val="valor", k=[1,2,3,4], e={uno:1, dos:3};
t instanceof Number;//false
5 instanceof Number;//false
k instanceof Object;//true
e instanceof Object;//true
val instanceof String;//false
