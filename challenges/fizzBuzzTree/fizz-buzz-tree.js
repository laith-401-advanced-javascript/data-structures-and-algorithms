'use strict';

const { Node, BinaryTree } = require('../tree/tree.js');




function FizzBuzzTree(kArr) {

  if (!kArr) {
    return `empty tree`;
  }
  if (kArr.value % 3 == 0 && kArr.value % 5 == 0) {
    kArr.value = `FizzBuzz`;
  }
  else if (kArr.value % 3 == 0) {
    kArr.value = `Fizz`;

  }
  else if (kArr.value % 5 == 0) {
    kArr.value = `Buzz`;
  }
  else {
    return kArr.value = kArr.value.toString();
  }

  FizzBuzzTree(kArr.left);
  FizzBuzzTree(kArr.right);

}

let node1 = new Node(5);
let node2 = new Node(15);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.right = node2;
node1.left = node3;
node3.right = node4;
node3.left = node5;

let binaryTreeObj = new BinaryTree(node1);

FizzBuzzTree(binaryTreeObj.root);
console.log('binaryTreeObj >>>>',binaryTreeObj);

console.log('preOrder : >', binaryTreeObj.preOrder());

