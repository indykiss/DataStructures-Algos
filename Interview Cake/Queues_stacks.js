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



