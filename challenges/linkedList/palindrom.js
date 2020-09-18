// 'use strict';

// // const LL = require('./linked-list');

// function llpalindrom(list) {
//     let arr = [];
//     let curuntNode = list.head;
//     if (curuntNode) {
//         arr.push(curuntNode.value);
//     }
//     while (curuntNode.next) {
//         curuntNode = curuntNode.next;
//         arr.push(curuntNode.value);

//     }
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - (i + 1)]) {
//             return false;
//         }
//         return true;
//     }
// }



// // module.exports = llpalindrom;