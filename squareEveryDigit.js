/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

const number = 9119

function squareDigits(number) {
  const arrayOfDigits = Array.from(String(number), Number)
  return parseInt(arrayOfDigits.map((digit) => digit * digit).join(''))
}

console.log(squareDigits(number))

/*

 function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
} */
