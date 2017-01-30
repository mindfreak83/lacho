"use strict"

const ary=[100,99,56,15,75,69,81];
var x=0, ary2=[];

do{

switch (true) {
  case ary[x]>=90 && ary[x]<=100:
        ary[x]='A';
        break;
  case ary[x]>=80 && ary[x]<=89:
        ary[x]='B';
        break;
  case ary[x]>=70 && ary[x]<=79:
        ary[x]='C';
        break;
  case ary[x]>=60 && ary[x]<=69:
        ary[x]='D';
        break;
  case ary[x]>=0 && ary[x]<=59:
        ary[x]='F';
        break;
  //default:

}
//console.log(ary[x]);
x++;
}while(x<ary.length);

console.log(ary);
