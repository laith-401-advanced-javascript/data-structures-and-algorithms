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
    // console.log('1111', this.head);
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
      // console.log('22222', curentNode.next);
      return this;
    }
  }

  // reverseLinkedList(value) {
  //     let newNode = new Node(value);
  //     let curentNode = this.head;
  //     while (curentNode) {
  //         curentNode.next = curentNode;
  //     }
  //     curentNode.next = newNode;
  //     return this;
  // }

  insertBefore(value, newValue) {
    let curentNode = this.head;
    while (curentNode.next.value !== value) {
      curentNode = curentNode.next;
    }
    let newNode = new Node(newValue);

    newNode.next = curentNode.next;
    curentNode.next = newNode;
    this.length++;
    return this;

  }


  insertAfter(value, newValue) {
    let curentNode = this.head;
    while (curentNode.value !== value) {
      curentNode = curentNode.next;
    }
    let newNode = new Node(newValue);

    newNode.next = curentNode.next;
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
    //
    while (curentNode) {
      if (curentNode.value == value) {
        // console.log('exist');
        return true;
      }
      curentNode = curentNode.next;
    }
    // console.log('not exist');
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

  // return the max value in   LL 
  maxValue() {
    let currentNode = this.head;
    let maxValue = 0;
    while (currentNode) {
      if (currentNode.value > maxValue) {
        maxValue = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return maxValue;
  }


  // dublicatedLL() {

  //   let currentNode = this.head;
  //   let currentNode2 = currentNode.next ;

  //   while (currentNode) {

  //     while (currentNode2) {
  //       if (currentNode.value == currentNode2.value) {
  //         // currentNode.next = currentNode2.next.next;
  //         console.log('if');
  //         // currentNode = currentNode.next ;
  //         // return `deleted` ;
  //       } else {
  //         return ` no Dublicate`
  //       }
  //       currentNode2 = currentNode2.next ;
  //     }
  //     currentNode = currentNode.next ;
  //   }
  //   return this;

  // }

  // this method to check if we have a value in LL and delete that velue
  deleteValue(value) {
    let currentNode = this.head;
    if (currentNode.value == value) {
      this.head = currentNode.next;
    }
    while (currentNode) {
      if (currentNode.next.value == value) {
        currentNode.next = currentNode.next.next;
      } else {
        return ` the value is not exist `;
      }
    }

  }


  meddileLL() {
    let currentNode = this.head;
    let array = [];
    while (currentNode) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    let mid = Math.floor(array.length / 2);
    console.log('mid >>', mid);

    return array[mid];


  }

}


function reverseLinkedList(list1) {

  let curentNode1 = list1.head;
  if (!curentNode1) {
    return `linked list is empty`;
  }
  let arr = [];
  while (curentNode1) {
    arr.push(curentNode1.value);
    curentNode1 = curentNode1.next;
  }
  let newLL = new LinkedList();
  for (let i = arr.length - 1; i > -1; i--) {
    newLL.insert(arr[i]);
  }
  return newLL;

}


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

const ll = new LinkedList();
const ll2 = new LinkedList();
const ll3 = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(15);
ll.insert(2);
// ll.dublicatedLL();
// ll3.mergeLists(ll, ll2);
// ll.kthFromEnd(1);
// console.log('-------', ll.kthFromEnd(0));

// console.log('**********', ll.insertBefore(1,6));
console.log('-------', ll.toString());
console.log('-------', ll.dublicatedLL().toString());


// console.log('-------', ll3.mergeLists(ll, ll2).toString());
// console.log('-------', llpalindrom(ll).toString());

// ll2.insert(15);
// ll2.insert(20);
// ll3.mergeLists(ll, ll2);

// ll3.reverseLinkedList(ll2);
// ll.insertBefore(1, 50);

// ll.insertAfter(5, 4);
// console.log('-------', ll.toString());



// console.log('***********---********');

// ll.includes(5);
// ll.includes(4);
// console.log('=====================>');

// ll.toString();
// console.log('+++++++++++++++', ll.toString());



module.exports = LinkedList;