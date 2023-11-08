//if statement
/*
        SYNTAX
        if (condition(s) === true) {
          run  block of codes 
            if condition evaluates to true
        }
    */
let a = 5;
// a = 5 ---> assignment operator

// a == 5 ---> weak equality
console.log(a == "5");
console.log(a == 5);

//type coersion
console.log(5 == "5");
console.log(20 + "you");
console.log(20 - "you");

// a === 5 ---> strict equality
console.log(a === "5");
console.log(a === 5);

if (a === 5) {
  console.log(a);
}

//if-else
/*
        SYNTAX
        if (condition(s)) {
          run  block of codes 
            if condition evaluates to true
        }else {
            run  block of codes 
            if condition evaluates to false
        }
    */
a = 19;

if (a === 5) {
  console.log(5);
} else {
  console.log(a);
}

//if-and else-if
/*
        SYNTAX
        if (condition(s)) {
          run  block of codes 
            if condition evaluates to true
        }else if (another condition) {
            run  block of codes 
            if condition evaluates to true
        }else {
            run block of codes 
            if all preceeding conditions evaluates to false
        }
    */

let newYear = "faster";
if (newYear === "slow") {
  console.log("what a year");
} else if ((newYear === "faster" && newYear === "slower") || a === 19) {
  console.log("kishky got a job");
} else {
  console.log(newYear);
}

//tenary operator
//switch statement

//Logical Operators
// Logical OR operator    ---> ||
// Logical AND operator   ---> &&

// TRUTHY                      AND                        FALSY VALUES
// numbers greater than 0 or                            // 0
// less than 0                                          // false
// string                                               // undefined
// true                                                 // null
// []                                                   // ''
// {}

if (0) {
  console.log(a);
}
