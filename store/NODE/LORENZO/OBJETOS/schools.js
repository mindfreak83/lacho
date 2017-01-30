var schools = [
  {
    "_id": "57c462afa8bf7ba7f7c4d055",
    "index": 0,
    "name": "SONGBIRD",
    "phone": "+1 (994) 429-2270",
    "address": "789 Homecrest Court, Stewartville, Vermont, 3767",
    "age": 96,
    "numOfStudents": 38
  },
  {
    "_id": "57c462af38c3cbf9bfdf1860",
    "index": 1,
    "name": "ENERSOL",
    "phone": "+1 (811) 564-2175",
    "address": "328 Vermont Court, Kidder, Rhode Island, 3808",
    "age": 94,
    "numOfStudents": 30
  },
  {
    "_id": "57c462af2c0f1d697efc0343",
    "index": 2,
    "name": "XANIDE",
    "phone": "+1 (968) 581-2785",
    "address": "685 Irwin Street, Logan, Missouri, 8436",
    "age": 75,
    "numOfStudents": 49
  },
  {
    "_id": "57c462af2341796e2c96e3cf",
    "index": 3,
    "name": "CALCU",
    "phone": "+1 (925) 420-3319",
    "address": "548 Amboy Street, Aberdeen, Michigan, 9281",
    "age": 41,
    "numOfStudents": 30
  },
  {
    "_id": "57c462af2ac70e9029ca97bd",
    "index": 4,
    "name": "ZILLA",
    "phone": "+1 (817) 543-2271",
    "address": "135 Lawn Court, Clarktown, California, 1332",
    "age": 73,
    "numOfStudents": 32
  },
  {
    "_id": "57c462afd68737af85337933",
    "index": 5,
    "name": "UTARIAN",
    "phone": "+1 (950) 501-3374",
    "address": "707 Durland Place, Weogufka, Ohio, 704",
    "age": 68,
    "numOfStudents": 42
  },
  {
    "_id": "57c462afabd6a9d88a122c48",
    "index": 6,
    "name": "MARTGO",
    "phone": "+1 (805) 546-2359",
    "address": "609 High Street, Elfrida, New Jersey, 8297",
    "age": 89,
    "numOfStudents": 37
  },
  {
    "_id": "57c462af7b0f5443a74749a9",
    "index": 7,
    "name": "TRI@TRIBALOG",
    "phone": "+1 (987) 500-2696",
    "address": "598 Howard Place, Staples, New York, 6185",
    "age": 57,
    "numOfStudents": 22
  },
  {
    "_id": "57c462af87e61f5624d14877",
    "index": 8,
    "name": "KENGEN",
    "phone": "+1 (934) 576-2245",
    "address": "695 Monroe Street, Courtland, Washington, 9232",
    "age": 62,
    "numOfStudents": 34
  },
  {
    "_id": "57c462af30233af565008059",
    "index": 9,
    "name": "PHARMEX",
    "phone": "+1 (967) 458-2445",
    "address": "208 Joralemon Street, Cavalero, Montana, 5341",
    "age": 77,
    "numOfStudents": 48
  }
];


function ret(n){
  var lnth=n.length, ary=[], z=0;

    for(var x=0; x<lnth; x++){
        ary[x]={"age":n[x].age, "numOfStudents":n[x].numOfStudents};
    }
    return ary;
}

console.log(ret(schools));
