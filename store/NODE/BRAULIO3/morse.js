"use strict"

// Create a function that receives an string or arrayof chars and return it
// in morse code between every letter must be an space a white space is made of 3
// white spaces. Dont use loops.
const MORSE = [
    {
        "morse": ".-",
        "char": "A"
    },
    {
        "morse": "-...",
        "char": "B"
    },
    {
        "morse": "-.-.",
        "char": "C"
    },
    {
        "morse": "-..",
        "char": "D"
    },
    {
        "morse": ".",
        "char": "E"
    },
    {
        "morse": "..-.",
        "char": "F"
    },
    {
        "morse": "--.",
        "char": "G"
    },
    {
        "morse": "....",
        "char": "H"
    },
    {
        "morse": "..",
        "char": "I"
    },
    {
        "morse": ".---",
        "char": "J"
    },
    {
        "morse": "-.-",
        "char": "K"
    },
    {
        "morse": ".-..",
        "char": "L"
    },
    {
        "morse": "--",
        "char": "M"
    },
    {
        "morse": "-.",
        "char": "N"
    },
    {
        "morse": "---",
        "char": "O"
    },
    {
        "morse": ".--.",
        "char": "P"
    },
    {
        "morse": "--.-",
        "char": "Q"
    },
    {
        "morse": ".-.",
        "char": "R"
    },
    {
        "morse": "...",
        "char": "S"
    },
    {
        "morse": "-",
        "char": "T"
    },
    {
        "morse": "..-",
        "char": "U"
    },
    {
        "morse": "...-",
        "char": "V"
    },
    {
        "morse": ".--",
        "char": "W"
    },
    {
        "morse": "-..-",
        "char": "X"
    },
    {
        "morse": "-.--",
        "char": "Y"
    },
    {
        "morse": "--..",
        "char": "Z"
    },
    {
        "morse": "-----",
        "char": "0"
    },
    {
        "morse": ".----",
        "char": "1"
    },
    {
        "morse": "..---",
        "char": "2"
    },
    {
        "morse": "...--",
        "char": "3"
    },
    {
        "morse": "....-",
        "char": "4"
    },
    {
        "morse": ".....",
        "char": "5"
    },
    {
        "morse": "-....",
        "char": "6"
    },
    {
        "morse": "--...",
        "char": "7"
    },
    {
        "morse": "---..",
        "char": "8"
    },
    {
        "morse": "----.",
        "char": "9"
    }
];

var str=["h","o","l","a"," ","m"];
var str1="jonathan montalvo varela";
var temp="", temp1="", temp2="";
  var ary=[], ary1=[], str4="", i=0, res=[], res1=[];

function morseEnc(str2){

 if(typeof(str2)==="object"){
   var nObj="";
   ary = str2.map(function(obj){
     if(obj===" "){
           nObj=1;
           return nObj;
     }
     else{
        obj=obj.toUpperCase();
         return obj;
     }
   });
    res=ary.map(function(obj){
        if(obj!==1){
          temp=obj;
          temp1=MORSE.find(compM);
          return temp1.morse;
        }else{
            temp1="   ";
          return temp1;
        }
    });
    res.forEach(function(onj){
       temp2+=onj+" ";
    });
  //  console.log(temp2);
    return temp2;
 }

 if(typeof(str2)==="string"){
    str2=str2.toUpperCase();
    ary1= Array.from(str2);
    //console.log(ary1);
    ary = ary1.map(function(obj){
      let nObj='';
      if(obj===" "){
            nObj=1;
            return nObj;
      }
      else{
          obj=obj.toUpperCase();
          return obj;
      }
   });
   //console.log(ary);
   res1=ary.map(function(obj){
       if(obj!==1){
         temp=obj;
         temp1=MORSE.find(compM);
         return temp1.morse;
       }else{
           temp1="   ";
         return temp1;
       }
   });
   res1.forEach(function(onj){
      temp2+=onj+" ";
   });
   //console.log(temp2);
    return temp2;
 }
}
console.log(morseEnc(str1));

function compM(bar){
let tempM="";
  if(temp===bar.char){
      tempM=bar.morse;
  }
  return tempM;
}
