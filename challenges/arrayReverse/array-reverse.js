'use strict';



function reverse(array) {
    var output = [];
    for (var i = array.length - 1; i > -1; i--) {
        output.push(array[i]);
    }

    return output;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));



//another way 

// function reverse(arr){
//     var output = [];

//     for (var i = arr.length -1 ; i >= 0  ; i--){
//        output[output.length] = arr[i];
//        console.log(arr[i])
//     }

//     return output;
// }

// console.log(reverse([1,2,3,4,5,6,7]));



// another way

// function reverse(arr){
//     var output = [];
//     for (var i = 0; i < arr.length ; i++){

//        output[i] = arr[arr.length - i - 1];
//        console.log(arr[arr.length -i - 1])
//     }

//     return output;
// }

// console.log(reverse([1,2,3,4,5,6,7]));