'use strict';

/**
 * @param value , the value on node
 */
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(value) {
        const nodeObj = new Node(value);

        nodeObj.prev = this.top;
        this.top = nodeObj;
        this.length++;
        return this;
    }

    pup() {
        if (this.isEmpty()) {
            throw new RangeError('can not pop');
        }
        let newTop = this.top.prev;
        console.log('*****', newTop);
        this.top = newTop;
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
const ss = new Stack();

// ss.push(1);
// ss.push(2);
// ss.pup();
// console.log('>>', ss)


class Queue {
    constructor() {
        this.front = null;
        this.rare = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.front) {
            this.rare.prev = newNode;
            this.rare = newNode;
            
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
        // console.log('****', this.front);
        let deleteValue = this.front.value;
        let restNodes = this.front.prev;
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

let newObj = new Queue();
newObj.enqueue(1);
newObj.enqueue(2);
newObj.enqueue(3)
newObj.dequeue();

// newObj.pup();

// newObj.pup();

// newObj.peek();

// newObj.isEmpty();
console.log('neeeeeeew ins :', newObj);
// console.log('=======>>>> :', newObj);

module.exports = { Stack, Node, Queue };