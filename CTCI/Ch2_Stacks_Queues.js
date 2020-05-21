

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
- A disk is slid off the top of the tower onto the next tower
- A disk can only be placed on top of a larger disk 
Write a program to move the disks from the first tower to the last using stacks. 
*/

// All towers are last in, first out. All three are stacks.


// Ugh I'm just going to skip this one





// Q5: Implement a queue using two stacks 
// Queue: First in, first out
class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    // [1,2,3]
    // pop => pulls out the 1, returns [2,3]
    push(ele) {
        this.inStack.push(ele);
    }

    pop() {
        // inStack: [1,2,3]
        // outStack: [2,3,1]
        if(this.outStack.length === 0) {
            while(this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
}



/* Q6: Write a program to sort a stack in ascending order with biggest items 
on top. 
You can use other stacks, but can't copy the elements into a new DS 
This ascStack supports push, pop, peek, and isEmpty. 
    When they say "this thing supports x, y, z functions" that means that those
    functions already exist. No need to do anything here. 
*/

function sortStack(unsorted) {
    const sorted = [];
    
    while(unsorted.length !== 0) {
        let ele = unsorted.pop();

        while(!sorted.isEmpty && unsorted.peek > ele) {
            sorted.oush(ele);
        }
    }    
}
// O(n^2) time and O(n) space



/* Q7: An animal shelter has dogs and cats. They only allow the oldest of each 
to be adopted. Queue. First in, first out system. 
Create the shelter DS with dequeue, enqueue, dequeuePuppy, dequeueKitty. 
You may use linked lists.
*/

class Shelter {

    constructor() {
        // Both linked lists that track age and name
        this.dogs = [];
        this.cats = [];
    }

    enqueue(animal) {
        if(animal.isDog()) this.dogs.add(animal);
        if(animal.isCat()) this.cats.add(animal);
    }

    dequeuAny() {
        if(this.dogs.size === 0) return this.dequeueCat();
        if(this.cats.size === 0) return this.dequeueDog();

        let dog = this.dog.peek();
        let cat = this.cat.peek();
        if(isOlder(cat, dog)) {
            return dequeueCat(); 
        } else {
            return dequeueDog();
        }
    }

    dequeueDog() {
        return this.dogs.first();
    }

    dequeueCat() {
        return this.cats.first();
    }

    isOlder(cat, dog) {
        if(cat.age > dog.age) return true;
    }

}