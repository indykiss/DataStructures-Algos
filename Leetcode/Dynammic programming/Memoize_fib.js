

/*
Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, 
called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).


Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.


Strategy: 
- Recursive - O(2^n)

Better:
- Memoize 
    Create a class that intiatizes a memo (hash table)
    fib(n) method:
        Still recursive 
        If memo.has(n), retrieve it 
        If memo doesnt, then add to memo 
- O(N) time and O(N)
*/

// Recursive: 
var fibRecurs = function(N) {
    if(N === 1 || N === 0) {
        return N;
    }
    
    return fib(N-1) + fib(N-2); 
};
// O(2^N) time 



// Memoize fib 
class Memoize {
    constructor() {
        this.memo = {};
    }
    
    fib(N) {
        if(N === 0 || N === 1) {
            return N; 
        }
        
        if(this.memo.hasOwnProperty(N)) {
            return this.memo[N]; // return val, not key
        }
        
        let newValue = fib(N-1) + fib(N-2);
        this.memo[N] = newValue; // add this to hash table
        return newValue;
    }   
}


