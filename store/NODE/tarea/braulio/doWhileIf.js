"use strict"

const ary=[100,99,56,15,75,69,81];
var x=0, ary2=[];

do{

    if((ary[x]>=90)&&(ary[x]<=100)){
        ary[x]='A';
    }
    if((ary[x]>=80)&&(ary[x]<=89)){
        ary[x]='B';
    }
    if((ary[x]>=70)&&(ary[x]<=79)){
        ary[x]='C';
    }
    if((ary[x]>=60)&&(ary[x]<=69)){
        ary[x]='D';
    }
    if((ary[x]>=0)&&(ary[x]<=59)){
        ary[x]='F';
    }
console.log(ary[x]);
x++;
}while(x<ary.length);
