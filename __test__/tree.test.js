'use strict';
const { Node } = require('../challenges/tree/tree');
const { BinaryTree } = require('../challenges/tree/tree');
const { BinarySearchTree } = require('../challenges/tree/tree');



describe('binary tree', () => {

  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);

  node1.right = node2;
  node1.left = node3;
  node3.right = node4;
  node3.left = node5;


  let tree = new BinaryTree(node1);
  
  it('preOrder', () => {
    let expected = [1, 3, 5, 4, 2];
    let preOrderOutput = tree.preOrder();
    expect(preOrderOutput).toEqual(expected);

  });


  it('inOrder', () => {
    let expected = [5, 3, 4, 1, 2];
    let preOrderOutput = tree.inOrder();
    expect(preOrderOutput).toEqual(expected);

  });

  it('postOrder', () => {
    let expected = [5, 4, 3, 2, 1];
    let preOrderOutput = tree.postOrder();
    expect(preOrderOutput).toEqual(expected);

  });


  
  it('findMaximumValue', () => {
    let expected = 5;
    let preOrderOutput = tree.findMaximumValue();
    expect(preOrderOutput).toEqual(expected);

  });

  it('findMaximumValue if it is empty ', () => {
    let tree1 = new BinaryTree();
    let preOrderOutput = tree1.findMaximumValue();
    expect(preOrderOutput).toEqual('empty tree');

  });

  


  it('breadthFirst if it is empty ', () => {
    let tree1 = new BinaryTree();
    let preOrderOutput = tree1.breadthFirst();
    expect(preOrderOutput).toEqual('empty tree');

  });

  it('breadthFirst  ', () => {
    let expected = [1, 3, 2, 5, 4];
    let breadthFirstOutput = tree.breadthFirst();
    expect(breadthFirstOutput).toEqual(expected);

  });


  it('FizzBuzzTree if it is empty ', () => {
    let tree1 = new BinaryTree();
    let FizzBuzzTreeOutput = tree1.FizzBuzzTree();
    expect(FizzBuzzTreeOutput).toEqual('empty tree');

  });

  // it('FizzBuzzTree  ', () => {
  //   let expected = [3];
  //   let FizzBuzzTreeOutput = tree.FizzBuzzTree();
  //   expect(FizzBuzzTreeOutput).toEqual(expected);

  // });




});




describe('binary Search tree', () => {

  let BST = new BinarySearchTree();

  BST.add(1);
  BST.add(2);
  BST.add(3);
  BST.add(4);
  BST.add(5);

  console.log(BST);
  console.log(BST.root.value);

  it('can add nodes in the correct location ', () => {
    expect(BST.root.value).toEqual(1);
    expect(BST.root.right.value).toEqual(2);
    expect(BST.root.right.right.value).toEqual(3);
    expect(BST.root.right.right.right.value).toEqual(4);
    expect(BST.root.right.right.right.right.value).toEqual(5);

  });

  it('can handle returning out when adding an existing value to a binary search tree', () => {
    BST.add(1);
    expect(BST.root.value).toEqual(1);
  });

  it('can look at a BST to see if it contains a given value', () => {
    expect(BST.contains(1)).toEqual(true);
    expect(BST.contains(44)).toEqual(false);
    expect(BST.contains(33)).toEqual(false);
  });

       

});
