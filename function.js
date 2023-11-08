//function declaration

//definations with {let , const, var}

"[0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j]";

/**
 * 255 / 16
 * 15  /16     r 15 f
 * 0           r 15 f
 * rgb(255, 255, 255)
 * #ffffff
 * ff
 * -----------------------
 *
 * 255 / 20
 * 12  /20     r 15 f
 * 0           r 12 c
 */

function base20(number) {
  const base20Array = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ];
  let numTObase20 = number;
  let finalArray = [];
  let remainder;

  while (numTObase20 > 20) {
    remainder = numTObase20 % 20;
    numTObase20 = parseInt(numTObase20 / 20);
    finalArray.unshift(base20Array[remainder]);
  }

  finalArray.unshift(base20Array[numTObase20]);
  return finalArray.join("");

  /**
   * CONTINUE TALKING THIS IS THE ANSWER TO YOUR BASE 20 PROBLEM
   * IT'S 11:30PM ALREADY AND YOU'VE WASTED ALL OUR TIME TODAY
   * GOOD NIGHT ZZZ
   */
}
console.log(base20(2557));

/**
 * L = [1, 3, 5, 2, 7, 11, 15] , n = 8 ///  7
 * filterL = [1, 3, 5, 2, 7]
 * sortFilerL = sort(filterL) //[1, 2, 3, 5, 7]
 * return num at sortFilterL[sortFilterL.length-1]; // 7
 */

function largestNumLessThanN() {}

function abuStandUp() {
  //parent scope
  let abu = "stand up";

  function abuStandup2() {
    //child scope
    let food;
    food = "meat";
    abu = "sit down";
    console.log(abu);
  }

  console.log(food);
}

abuStandUp();
console.log(abu);
//function expression

abuSitDown = function () {
  console.log(abu);
};

abuSitDown();

//Anonymous function

//i  am not talking , i'm just typing
