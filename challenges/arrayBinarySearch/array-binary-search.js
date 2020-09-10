'use strict';

function BinarySearch(storedArray, searchKey) {
  var result;
  storedArray.forEach(item => {
    if (item == searchKey) {
      result = item;
    }
  });
  if (!result) {
    result = -1;
  }
  return result;
}

BinarySearch([1, 2, 3, 5, 8], 2);

module.exports = BinarySearch;