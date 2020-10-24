'use strict';
// const { HashTable } = require('../hashtable/hashtable')




function lengthyString(str) {

  let splitString = str.split(' ');
  let max = 0
  let maxStr = ''
  for (let i = 0; i < splitString.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < splitString.length; j++) {

      // this condition will combare the word if it is repeated return that word 
      if (splitString[i] === splitString[j]) {
        sum++;
      }
    }
    if (sum > max) {
      max = sum
      maxStr = splitString[i]
    }
  }
  console.log(maxStr);
  return maxStr

}


// function lengthyString(str) {
//   let splitString = str.split(' ');
//   for (let i = 0; i < splitString.length; i++) {
//     for (let j = i + 1; j < splitString.length; j++) {
//       // this condition will combare the word if it is repeated return that word 
//       if (splitString[i] === splitString[j]) {
//         return splitString[i];

//       }
//     }
//   }
//   return false;

// }



// console.log(lengthyString("abc abc"));
lengthyString('In a galaxy far far away away away')


module.exports = lengthyString;