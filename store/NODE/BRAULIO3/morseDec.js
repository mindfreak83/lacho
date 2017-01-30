"use strict"

// Create a function that receives a string or array of chars as morse code and
// return an upper cased text based on the the code provided.
//
// morseDec(theCode); "HOLA M"

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


var strMorse=".--. .- - ---     -- "
var strMorse2=['.','-','-','.',' ','.','-',' ','-',' ','-','-',' ']

var strM3= strMorse2.join('');
var res=[], temp="", temp1="";

//console.log( strM3);

function morseDec(str){

if(typeof(str)==="string"){
  var strM2= str.split(" ");
    res = strM2.map(function(obj){
      if(obj!==""){
          temp=obj;
          temp1=MORSE.find(compMr);
            return temp1.char;
        }if(obj===" "){
          return " ";
        }else{
          return "";
        }
      });

console.log(res);

//res= res.forEach(espace);

  }
if(typeof(str)==="object"){

  }


}


morseDec(strMorse);

function compMr(o){

    return temp===o.morse;
}

function space(a){
  let cont=0;
    if(a===" "){
        if(cont>=4){
            return
        }
    }else{

    }
}
