'use strict';


// let array = [1, 2, 4, 5,7];

function insertShiftArray(arr, num) {

  let indexMiddle = Math.ceil(arr.length / 2);

  let array2 = [];

  for (let s = 0; s < indexMiddle; s++) {
    array2[s] = arr[s];

  }
  console.log(array2);

  array2[indexMiddle] = num;

  for (let l = indexMiddle + 1; l < arr.length + 1; l++) {
    array2[l] = arr[l - 1];

  }
  return array2;
}

// insertShiftArray(array, 3);


module.exports = insertShiftArray;