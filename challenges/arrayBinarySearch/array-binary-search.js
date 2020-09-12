'use strict';

// function BinarySearch(storedArray, searchKey) {
//   var result;
//   storedArray.forEach(item => {
//     if (item == searchKey) {
//       result = item;
//     }
//   });
//   if (!result) {
//     result = -1;
//   }
//   return result;
// }

// BinarySearch([1, 2, 3, 5, 8], 2);




function BinarySearch(sortedArray, searchKey) {
    var low = 0;
    var high = sortedArray.length - 1
    var mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (sortedArray[mid] == searchKey) {
            console.log(mid);
            return mid;
        } else if (sortedArray[mid] < searchKey) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}


BinarySearch([1, 2, 3, 4, 5], 6);

module.exports = BinarySearch;