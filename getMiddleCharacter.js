function getMiddle(string) {
  const toArray = string.split('')
  console.log(toArray)
  let test
  if (toArray.length % 2 !== 0) test = toArray[Math.floor(toArray.length / 2)]
  else {
    test =
      toArray[Math.floor(toArray.length / 2 - 1)] +
      toArray[Math.floor(toArray.length / 2)]
  }
  return test
}

console.log(getMiddle('teist'))
