"use strict";
/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */
const validParentheses = (str) => {
    const array = str.split('');
    let counter = 0;
    let failsystem = 0;
    if (array[0] === ')')
        return false;
    if (array[array.length - 1] === '(')
        return false;
    if (array.length % 2 !== 0)
        return false;
    array.forEach((e) => {
        if (counter === 0 && e === ')')
            failsystem++;
        if (e === '(')
            counter++;
        if (e === ')')
            counter--;
    });
    return counter || failsystem ? false : true;
};
const tester = '(())(((bb)())())';
console.log(validParentheses(tester));
