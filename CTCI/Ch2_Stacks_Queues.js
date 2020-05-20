

/*
Stacks and Queues

A stack is a DS with a last in, first out. Like a stack of dinner plates. 

A queue is a DS with a first in, first out. Like a queue at a store.

*/


/* Q1: Describe how you can use an array to implement three stacks. 

Divide the array into 3 parts and give each part to a stack.
*/

// Watch a youtube about me:
// Watched a youtube. Still very confused. Skipping this one.
let stackSize = 100; 
// ???: 
let buffer = [stackSize * 3];
let stackPointer = [-1, -1, -1];

var push = function(stackNum, val) {
    // Check that we have space:
    if(stackPointer[stackNum] + 1 >= stackSize) {
        console.log("Out of space");
    }
    // Increment stack pointer and update top value 
    stackPointer[stackNum]++; 
    buffer = val;
}

var pop = function(stackNum) {
}



// Q2: Design a stack which has push, pop, and a function min that 
    // returns the minimum element.
    // Stack: last in, first out 

class StackMaker {

    constructor() {
        this.stack = [];
    }

    push(ele) {
        this.stack.push(ele);
    }

    pop() {
        this.stack.pop();
    }

    // Assume all elems are numbers
    min() {
        return Math.min(...this.stack); 
        // OR:
        // let smallest = 0; 
        // for(let i = 0; i < this.stack.length; i++) {
        //     if(this.stack[i] < smallest) {
        //         smallest = this.stack[i];
        //     }
        // }
        // return smallest;
    }
}



/* Q3: Imagine a literal stack of plates. If the stack gets too high, 
 it'll topple. So in real life, we'd create a new stack of plates when the 
 first stack gets too high. 
 Create a class SetOfStacks that mimics this. Create a threshold of what 
 too high would be. Push and pop. 
*/

class SetOfStacks {

    constructor() {
        this.set = [[1,2,3,4,5], [6,7,8,9,10], []];
        this.threshold = 5;
    }

    createNewStack() {
        this.set.push([]);
    }

    push(ele) {
        if(this.set.pop.length >= this.threshold) {
            createNewStack();
            this.set[-1].push(ele);
        } else {
            this.set[-1].push(ele);
        }
    }

    pop() {
        this.set[-1].pop();
    }
}



/* Q4: In the classic problem of the towers of Hanoi, you have 3 towers 
and N disks of different sized to slide onto each tower. 
The puzzle starts with disks sorted in asc order from top to bottom. 
You have the following constraints:
- Only one disk can be moved at one top 
- A disk is dlie off the top of the tower onto the next tower
- A disk can only be placed on top of a larger disk 
Write a program to move the disks from the first tower to the last using stacks. 
*/

