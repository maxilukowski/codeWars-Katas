function accum(s) {
  const array = s.split('')
  const loopAmount = array.length
  const newArray = []

  for (let i = 0; i < loopAmount; i++) {
    let givenLetter = array[i]
    let newShit
    if (i > 0) newShit = givenLetter.repeat(i + 1)
    else newShit = givenLetter
    newArray.push(
      newShit.charAt(0).toUpperCase() + newShit.slice(1).toLowerCase()
    )
  }

  return newArray.join('-')
}

//////////////////////////////////////////////////////////////////////

/* function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  } */

function countPlaces(num) {
  var sep = String(23.32).match(/\D/)[0]
  var b = String(num).split(sep)
  return b[1] ? b[1].length : 0
}

console.log(countPlaces(2.55))
