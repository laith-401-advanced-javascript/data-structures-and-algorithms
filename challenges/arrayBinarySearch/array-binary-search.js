'use strict';

function BinarySearch(storedArray, searchKey) {
    var result;
    storedArray.forEach(item => {
        if (item == searchKey) {
            result = item;
        }
    })
    if (!result) {
        result = -1;
    }
    return result;
}