'use strict';

/**
 * @param value , the value on node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
    return this;
  }

  pup() {
    if (this.isEmpty()) {
      throw new RangeError('can not pop');
    }
    let item = this.top.next;
    this.top = item;
    this.length--;
    return this;
  }


  peek() {
    if (this.isEmpty()) {
      throw new RangeError('connet peek an empty stack');
    }

    return this.top;
  }
  isEmpty() {
    return this.length > 0 ? false : true;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rare = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.front) {
      this.rare = newNode;
      this.front.next = this.rare;
    } else {
      this.front = newNode;
      this.rare = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new RangeError('quee is empty');

    }
    let deleteValue = this.front.value;
    let restNodes = this.front.next;
    this.front = restNodes;
    this.length--;
    return deleteValue;
  }


  peek() {
    if (this.isEmpty()) {
      throw new RangeError('you can not peek and empty Queue');
    }
    return this.front.value;

  }

  isEmpty() {
    return this.length > 0 ? false : true;
  }

}

// let newObj = new Stack();
// newObj.push(1);
// newObj.push(2);

// newObj.peek();

// newObj.pup();
// console.log('neeeeeeew ins :', newObj);
// console.log('>>>>>>> :', newObj.peek());

module.exports = { Stack, Node, Queue };