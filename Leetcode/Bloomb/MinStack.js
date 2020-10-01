

/*
Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

*/


// Bloomb, Sept. Do again for refresher
class MinStack{
    constructor() {
        this.stack = [];
    }
    
    push(x) {
        this.stack.push(x);
    }
    
    pop() {
        this.stack.pop();
    }
    
    top(){
        return this.stack[this.stack.length-1];
    }
    
    getMin(){
        return Math.min(...this.stack)
    }
}