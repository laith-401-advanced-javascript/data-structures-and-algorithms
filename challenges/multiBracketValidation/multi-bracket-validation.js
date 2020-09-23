'use strict';

function multiBracketValidation(input) {
    const bracketsArr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
            bracketsArr.push(input[i]);
            // console.log(bracketsArr);
        }
        if ((input[i] === ')' && bracketsArr[bracketsArr.length - 1] === '(') ||
            (input[i] === '}' && bracketsArr[bracketsArr.length - 1] === '{') ||
            (input[i] === ']' && bracketsArr[bracketsArr.length - 1] === '[')) {
            bracketsArr.pop();
            // console.log(bracketsArr);
        } else if ((input[i] === ')' && bracketsArr[bracketsArr.length - 1] !== '(') ||
            (input[i] === '}' && bracketsArr[bracketsArr.length - 1] !== '{') ||
            (input[i] === ']' && bracketsArr[bracketsArr.length - 1] !== '[')) {
            //   console.log(bracketsArr);
            return false;
        }
    }
    if (bracketsArr.length === 0) return true;
    return false;
}

console.log(multiBracketValidation('[({}]'));



module.exports = multiBracketValidation;