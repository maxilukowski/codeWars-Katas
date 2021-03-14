/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, or ")" if that character appears more than once in the 
original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

word = 'hallo'

/* const duplicateEncode = (string) => {
  const arrayOfCharacters = [...string.toLowerCase()]
  const characterCounter = {}
  const newArrayOfCharacters = []

  arrayOfCharacters.forEach((character) => {
    if (!characterCounter[character]) characterCounter[character] = 1
    else characterCounter[character]++
  })
  arrayOfCharacters.forEach((character) => {
    if (characterCounter[character] > 1) newArrayOfCharacters.push(')')
    else newArrayOfCharacters.push('(')
  })
  return newArrayOfCharacters.join('')
} */

const duplicateEncode = (string) => {
  return string
    .toLowerCase()
    .split('')
    .map((char, i, a) => {
      return a.lastIndexOf(char) === a.indexOf(char) ? '(' : ')'
    })
    .join('')
}

console.log(duplicateEncode(word))
