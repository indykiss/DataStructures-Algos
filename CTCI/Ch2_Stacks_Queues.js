

/*
Stacks and Queues

A stack is a DS with a last in, first out. Like a stack of dinner plates. 

A queue is a DS with a first in, first out. Like a queue at a store.

*/


/* Q1: Describe how you can use an array to implement three stacks. 

Divide the array into 3 parts and give each part to a stack.
*/

// Watch a youtube about me:
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