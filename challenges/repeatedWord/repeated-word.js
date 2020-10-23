'use strict';



function lengthyString(str) {

  let splitString = str.split(' ');

  for (let i = 0; i < splitString.length; i++) {

    for (let j = i + 1; j < splitString.length; j++) {
      // this condition will combare the word if it is repeated return that word 
      if (splitString[i] === splitString[j]) {

        return splitString[i]  ;

      }
    }
  }
  return false;

}



// console.log(lengthyString("abc abc"));
console.log(lengthyString('hi no hello no  no hi '));


module.exports = lengthyString;