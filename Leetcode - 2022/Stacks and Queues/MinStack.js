

/*
Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

*/



// Oct bloomb refresh:
class MinStack {
    constructor() {
        this.stack = [];
    }
    
    push(x) {
        this.stack.push(x);
    }
    
    pop() {
        this.stack.pop();
    }
    
    top() {
        let temp = this.stack.pop();
        this.stack.push(temp);
        return temp;
    }
    
    getMin() {
        let min = Infinity;
        for(let ele of this.stack) {
            if(ele < min) {
                min = ele
            }
        }
        return min;
    }   
}



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