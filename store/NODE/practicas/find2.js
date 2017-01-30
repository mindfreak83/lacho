"use strict"

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

var temp, obj;

function llamar(ary){
var s=[], t=[];
//console.log(ary);
s=Array.from(ary);
console.log(s);

t=s.map(function(element){
  //console.log(element);
        obj=element;
        //console.log(obj);
        temp=MORSE.find(encuentra);
        return temp.morse;
});
console.log(t);
}

llamar("KJNSDJNDSKJNDCN");

function encuentra(a){
    if(a.char===obj){
      return a.morse;
    }
    }
