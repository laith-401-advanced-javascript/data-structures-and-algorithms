'use strict';

const { Queue } = require('../challenges/StacksAndQueues/stacks-and-queues.js');

const { Stack } = require('../challenges/StacksAndQueues/stacks-and-queues.js');
// const Queue = require('../challenges/StacksAndQueues/stacks-and-queues').Queue;
// const Node = require('../challenges/StacksAndQueues/stacks-and-queues.js').Node;

describe('stack module ', () => {

  it('check the instanceof stack', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();

  });

  it('can push on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);

  });


  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });
  it('can pop the last item', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pup();
    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pup();
    expect(stack.peek().value).toEqual(1);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(() => stack.peek()).toThrow(RangeError);

  });

  it('Can successfully enqueue into a queue', () => {
    let stack = new Queue();
    stack.enqueue(1);
    expect(stack.front.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let stack = new Queue();
    stack.enqueue(1);
    stack.enqueue(2);
    expect(stack.rare.value).toEqual(2);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let stack = new Queue();
    stack.enqueue(1);
    console.log('..........', stack);
    stack.enqueue(2);
    console.log('..........', stack);

    stack.dequeue();
    console.log('..........', stack);

    expect(stack.front.value).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let stack = new Queue();
    stack.enqueue(1);
    expect(stack.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let stack = new Queue();
    stack.enqueue(1);
    stack.enqueue(2);
    stack.dequeue();
    stack.dequeue();

    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    let stack = new Queue();
    expect(stack instanceof Queue).toBeTruthy();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let stack = new Queue();
    // expect(stack instanceof Queue).toBeTruthy();
    expect(() => stack.peek()).toThrow(RangeError);
    expect(() => stack.dequeue()).toThrow(RangeError);
  });


});