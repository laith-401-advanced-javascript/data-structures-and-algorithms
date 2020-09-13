'use strict';

const LinkedList = require('../challenges/linkedList/linked-list');


describe('linked list module', () => {

    it(' constructor expect the head to be null , Can successfully instantiate an empty linked list', () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
        // console.log('=========', list);
    });

    it('insert() Can properly insert into the linked list', () => {
        let ll = new LinkedList();
        let firstValue = 'first val';
        ll.insert(firstValue);
        expect(ll.head.value).toEqual(firstValue);
    });

    it('insert() Can properly insertCan properly insert multiple nodes into the linked list into the linked list', () => {
        let ll = new LinkedList();
        let firstValue = 'first val';
        ll.insert(firstValue);

        let newValue = 'second val';
        ll.insert(newValue);
        expect(ll.head.next.value).toEqual(newValue);
    });

    it('The head property will properly point to the first node in the linked list', () => {
        let ll = new LinkedList();
        let firstValue = 'first val';
        ll.insert(firstValue);

        let newValue = 'second val';
        ll.insert(newValue);
        expect(ll.head.value).toEqual(firstValue);
    });


    it('Will return true when finding a value within the linked list that exists', () => {
        let ll = new LinkedList();
        let firstValue = 'first val';
        ll.insert(firstValue);

        expect(ll.includes(firstValue)).toBeTruthy();
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let ll = new LinkedList();
        let newValue = 'second val';
        ll.insert(newValue);

        expect(ll.includes('first val')).toBeFalsy();
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let ll = new LinkedList();
        ll.insert(5);
        ll.insert(10);
        ll.insert(15);

        expect(ll.toString()).toEqual('{ 5} -> { 10} -> { 15} -> null');
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        let ll = new LinkedList();

        ll.insertBefore(5, 6);
        let currentNode = ll.head
        while (currentNode.value != 6) {
            currentNode = currentNode.next
        }
        console.log(currentNode);
        expect(currentNode.next.value).toEqual(5)
    });

    it('the insertAfter method add the newVal right After the val', () => {
        let ll = new LinkedList();
        ll.insertAfter(6, 7);
        let currentNode = ll.head
        while (currentNode.value != 6) {
            currentNode = currentNode.next
        }
        console.log(ll);
        expect(currentNode.next.value).toEqual(7)
    })


});