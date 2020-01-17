/* 
You want to be able to access the largest element 
in a stack and implement the push, pop, and getMax methods.


Strat: Keep track of max as we build the stack.
As we push in, we compare the value w/ max. 
Keep the maxes in a stack, in case we have to 
get rid of the currentMax. We can replace max 
with the old max. 

Lesson: Remember, can't use index accessing in stacks like 
in arrays. 
Notice we spend time in push() and pop() so we can save 
time in getMax(). There's always tradeoffs in time v space. 

*/

// Make a stack using the Stack class we created
class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxStack = new Stack();
  }

  push(item) {
    this.stack.push(item);
    // This is a legit stack so use our built in functions
    // If item > max or there is no max;
    if(item >= this.maxStack.peek() ||
        this.maxStack.peek() === null) {
      this.maxStack.push(item);
    }
  }

  pop() {
    const item = this.stack.pop();
    // If popped item is the max, we pop it too
    if(item === this.maxStack.peek()) {
      this.maxStack.pop();
    }
    return item;
  }

  getMax() {
    return this.maxStack.peek();
  }
}


// Using an arr for this stack
class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}





/*
Implement a queue with 2 stacks. Your queue should 
have an enqueue and a dequeue method and it should be 
"first in first out" (FIFO).

Optimize for the time cost of m calls on your queue. 
These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and 
it gives O(1) time push and pop.

Strat: Push all the items into inStack, then out of inStack
and into outStack so we can have outStack in FIFO order.
To make this process as efficient as possible, we only
move elements in/out of stacks as we enqueue and dequeue.

*/


class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  
  // We push item into inStack for enqueue
  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    // If outStack is empty, we have to move 
      // over everying in inStack  
    if(this.outStack.length === 0) {
     // Move eles from inStack to outStack, reversing order
     while(this.inStack.length > 0) {
       const element = this.inStack.pop();
       this.outStack.push(element);
     }
    } 
    // Edge: If outStack's empty still, for some reason
    if(this.outStack.length === 0) {
      throw new Error("Queue is empty.")
    }
    // If outStack is full, we just need to 
    // return the top item
    return this.outStack.pop();
  }
  
}

// Stack implementation (bc let's not assume we haz it)
  // This is for practice. Commented out bc messing with tests
// class Stack{
//   constructor() { this.items = [] }
//   push(item) { this.items.push(item) }
//   pop() { return this.items.pop() }
// }





