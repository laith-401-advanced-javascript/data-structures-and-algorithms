'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size);  //bucket
  }


  hash(key) {
    let charArr = key.split('');
    return charArr.reduce((accumilate, value) => {
      return accumilate + value.charCodeAt(0);

    }, 0) * 599 % this.size;
  }

  add(key, value) {
    let hashIndex = this.hash(key);

    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    this.entries[hashIndex].append(entry);
  }

  // this method will takes a key and return the value of the index of that key 
  get(key) {
    const index = this.hash(key); // will return the index of the key in the array hash table like [777]
    return this.entries[index] ? this.entries[index] : null; // if the index is exist return the value of it , else return false
  }

  // this method will see the key exist in the hash table  is exist will return true if not return false 
  contains(key) {
    const hashIndex = this.hash(key);
    return this.entries[hashIndex]  ? true : false;
  }

}

    
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {

      let curruntNode = this.head;
      while (curruntNode.next) {
        curruntNode = curruntNode.next;
      }
      curruntNode.next = newNode;
    }
  }

  includes(value) {
    let curentNode = this.head;
    while (curentNode) {
      if (curentNode.value == value) {
        return true;
      }
      curentNode = curentNode.next;
    }
    return false;
  }

}


let myHash = new HashTable(1024);
myHash.add('Laith', 123);
myHash.add('Laith', 111);
// myHash.add('Laith', 222);

console.log('myHash', myHash);
console.log('get>>>', myHash.hash('Laith'));
// console.log(myHash.entries[318]);


module.exports = {LinkedList , Node,HashTable};