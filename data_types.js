//DATA TYPES
//string   'you', 'boy', "javaScript"
let string = "new year";
console.log(typeof string);

//numbers  9, 9.5, 10.0094
let number = 3;
console.log(typeof number);

//boolean  true, false   !== 'true', 'false'
let boolean = true;
console.log(typeof boolean);

//undefined
let undefineded = undefined;
console.log(typeof undefineded);

//null
let nulled = null;
console.log(typeof nulled);

//Bigint     INTEGER_MAX_VALUE = (2^53 - 1 )9007199254740991 /// 9007199254740991n + 100n = 9007199254741091
let Bigint = 9n;
console.log(typeof Bigint);

//symbol
//object  --->
//object
const obj = {
  name: "Abu",
  age: 24,
  height: 150,
  hobbies: ["jumping", "sleeing", "eating"],
};
console.log(typeof obj);

//array
const array = ["school", 94, true, undefined, null, obj];
console.log(typeof array);

let bigint = 2 ** 53 - 1; // 9007199254740991
let addToBigint = 9007199254740991n + 100n;
addToBigint;
