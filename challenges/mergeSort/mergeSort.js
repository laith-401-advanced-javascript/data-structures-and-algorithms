'use strict';

function Mergesort(arr) {
  let n = arr.length;
  if (n > 1) {
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    Mergesort(left);
    Mergesort(right);
    Merge(left,right,arr);

    return arr ;
  }
}


function Merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let k = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      arr[k] = left[leftIndex];
      leftIndex++;
    } else {
      arr[k] = right[rightIndex];
      rightIndex++;
    }
    k++;
  }

  if (leftIndex === left.length){
    for(rightIndex; rightIndex < right.length; rightIndex++){
      arr[k] = right[rightIndex];
      k++;
    }
  }else{
    for(leftIndex; leftIndex < left.length; leftIndex++){
      arr[k] = left[leftIndex];
      k++;
    }
  }

}

let x = [8,4,23,42,46,15] ;

// Mergesort(x);

console.log('x1 >>>>',Mergesort(x));



module.exports = Mergesort ;
