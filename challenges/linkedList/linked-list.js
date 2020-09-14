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



}

const ll = new LinkedList();

ll.insert(5);
ll.insert(10);
// ll.kthFromEnd(1);
console.log('**********', ll.kthFromEnd(1));

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