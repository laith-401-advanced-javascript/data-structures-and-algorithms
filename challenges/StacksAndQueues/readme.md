# data-structures-and-algorithms

# stack and queue
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
## Challenge
<!-- Description of the challenge -->
to create new classes for staks and queues and add the methods that controls them.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Create a Stack class that has a top property. It creates an empty Stack when instantiated..

## Action Link 

[ Action Link]

(https://github.com/laith-401-advanced-javascript/data-structures-and-algorithms/actions/runs/250446381)

## Solution
<!-- Embedded whiteboard image -->



Problem Domain :

Start working with Stacks and Queues

Challange :
to create new classes for staks and queues and add the methods that controls them.

solution :
Create a Stack class that has a top property. It creates an empty Stack when instantiated..

This object should be aware of a default empty value assigned to top when the stack is created.

start add the methods :

Big O :
Big O(1)

I/O :
I : value O : stack

Visual :
[1] =>[2] =>[3] =>Null push(4) [1] =>[2] =>[3] =>[4] => Null

Algorithm :
1- define new instace of the Node class newNode with the value 2- assign the newNode to the stack top 3- increase the stack length by 1 4- return the stack

is(Empty) :
problem Domain :
Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.



I/O :
I : stack O : boolean

Visual :
[1] =>[2] =>[3] =>Null isEmpyt() => false

Algorithm :
1- return true if the stack length > 0 and else return false



***********************************************
Create a Queue class that has a front property. It creates an empty Queue when instantiated.

Queues Methods :
enqueue() :
problem Domain :
Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

Big O :
Big O(1)

I/O :
I : value O : stack

Visual :
[1] =>[2] =>[3] =>Null push(4) [1] =>[2] =>[3] =>[4] => Null

Algorithm :
1- define new instace of the Node class newNode with the value 2- check if the queue front is not null assing the newNode to the rare and assign the rare to the front.next else assign the newNode to the rare and front of the queue ass 3- increase the queue length by 1 4- return the queue

is(Empty) :
problem Domain :
Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

Big O :
Big O(1)

I/O :
I : queue O : boolean


