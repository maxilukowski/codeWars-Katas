/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

const arrToTest = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]

function findOdd(A) {
  const countedInteger = A.reduce(function (allIntegers, integer) {
    if (integer in allIntegers) {
      allIntegers[integer]++
    } else {
      allIntegers[integer] = 1
    }
    return allIntegers
  }, {})
  for (let prop in countedInteger) {
    if (countedInteger[prop] % 2 !== 0) return Number(prop)
  }
}

/* function findOdd(A) {
  let obj = {}
  A.forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)))

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop)
  }
} */
