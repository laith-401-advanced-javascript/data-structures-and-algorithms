'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;

  }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;

  }


  insert(value) {
    let newNode = new Node(value); // value: value, next: null
    //if this linked list is empty 
    console.log('1111', this.head);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;

    } else {
      // if we have other stuff, I need to add it at the end
      // I have to loop through all nodes and add it to the tail
      let curentNode = this.head;
      while (curentNode.next) {
        curentNode = curentNode.next;
      }
      curentNode.next = newNode;
      this.length++;
      console.log('22222', curentNode.next);
      return this;
    }
  }


  insertBefore(value, newValue) {
    let curentNode = this.head;
    while (curentNode.next.value !== value) {
      curentNode = curentNode.next;
    }
    let otherNode;
    otherNode = curentNode.next;
    let newNode = new Node(newValue);

    newNode.next = otherNode;
    curentNode.next = newNode;
    this.length++;
    return this;

  }
  insertAfter(value, newValue) {
    let curentNode = this.head;
    while (curentNode.value !== value) {
      curentNode = curentNode.next;
    }
    let otherNode;
    otherNode = curentNode.next;
    let newNode = new Node(newValue);

    newNode.next = otherNode;
    curentNode.next = newNode;

    this.length++;
    return this;

  }

  kthFromEnd(k) {
    let curentNode = this.head;
    let length = 0;
    while (curentNode) {
      length++;
      curentNode = curentNode.next;
    }
    let requireNode = length - 1 - k;
    if (requireNode < 0 || k < 0) {
      return 'not valid';
    }
    curentNode = this.head;
    while (requireNode > 0) {
      requireNode--;
      curentNode = curentNode.next;
    }
    return curentNode.value;
  }

  includes(value) {
    let curentNode = this.head;
    while (curentNode) {
      if (curentNode.value == value) {
        console.log('exist');
        return true;
      }
      curentNode = curentNode.next;
    }
    console.log('not exist');
    return false;

  }

  toString() {
    let string = '';
    // "{ a } -> { b } -> { c } -> NULL"
    // console.log('tt', this.head);
    let curentNode = this.head;
    while (curentNode) {
      string = string + `{ ${curentNode.value}} -> `;
      curentNode = curentNode.next;
    }
    string = string + null;
    return string;
  }

  mergeLists(list1, list2) {
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;

    while (currentNode1 || currentNode2) {
      if (currentNode1) {
        this.insert(currentNode1.value);
        currentNode1 = currentNode1.next;
      }
      if (currentNode2) {
        this.insert(currentNode2.value);
        currentNode2 = currentNode2.next;
      }
    }
    return this;

  }

}

const ll = new LinkedList();

const ll2 = new LinkedList();

const ll3 = new LinkedList();

ll.insert(5);
ll.insert(10);
ll2.insert(15);
ll2.insert(20);
// ll3.mergeLists(ll, ll2);
// ll.kthFromEnd(1);
console.log('**********', ll.kthFromEnd(1));
console.log('-------', ll3.mergeLists(ll, ll2).toString());

// ll.insertBefore(10, 50);
// ll.insertAfter(5, 4);

// ll.insert(15);
// ll.insert(20);
// ll.insert(25);


// console.log('***********---********');

// ll.includes(5);
// ll.includes(4);
// console.log('=====================>');

// ll.toString();
// console.log('+++++++++++++++', ll.toString());

console.log('LL objects', ll);


module.exports = LinkedList;