/* Write a recursive function for generating all permutations of 
an input string. Return them as a set.

Don't worry about time or space complexity, duh. Recurse.

Assumptions: Every character in input string is unique 
Edge: Very short strings? 2-3 

Strat: Break it down into subproblems 
  Get all permutations for all chars minus the last one 
  then put the last char into each possible position.
  Use this approach recursively. 
  Have to use recursion SO need a base case for when to stop
  Must return a set.

Lesson: Break the problem down "by hand" then translate that into code. 
We knew this. But like, more reinforcement. 

*/


function getPermutations(string) {

  // Generate all permutations of the input string
  const permutations = new Set();

  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }
  
  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];
  
  // Recurse: Get all permutations for allCharsExcLast
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  
  // Action of putting last char into all positions possible
  // IDK WHAT IS HAPPENING HERE: 
   permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
      for (let position = 0; position <= allCharsExceptLast.length; position++) {
        const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
      }
    });
  return permutations;
}
// cat -> ca, ac, tca, cta, cat, tac, atc, act






 /*
 
Write a function fib() that takes an integer nn and returns the nth Fibonacci number.
 
Strat: We start with recursion, then memoize, then bottoms up. 

S1: Basic recursive func. Then optimize

S2: Wrap the function in a class so we can add memoizer

S3: Optimize again. Bottoms up approach replaces memoizer

*/ 

// OK. Normal recurse. TERRIBLE run time. 
// O(2^n) BC the call stack looks like a binary tree 
// As we increase by 1/ 2, it's 2^1/ 2^2

function fibOK(n) {
  // Edge: 
  if(n < 0) {
    throw new Error("Can't have negative")
  }
  // Base:
  if(n === 0 || n === 1) {
    return n
  }
  // Recurse:
  return fib(n-1) + fib(n-2)
}



// Great: I MEMOIZE. O(N) TIME AND SPACE
class FibberGreat {
  constructor() {
    // Memos are hashes
    this.memo = {}
  }
  
  fib(n) {
    // Edge case
    if(n < 0) {
      throw new Error("Can't do negative fib.")
    }
    // Base case: when to stop
    if(n === 0 || n === 1) {
      return n;
    }
    // Memoize! Have we done this already?
      // If yes, return that guy
    if(this.memo.hasOwnProperty(n)) {
      return this.memo[n];
    }
    // Recurse. Save the recurse to move into memo hash if its not there
    const result = this.fib(n-1) + this.fib(n-2);
    this.memo[n] = result;
    // Return the answer
    return result;
  }  
}
// O(n) time because since we're memoizing, we only run each call once then 
// save. Same with space: O(n), we're saving each call once



// BEST. Start with fib(1) and fib(0).
// This is a bottom up approach! No more memo
// O(n) time and O(1) space

function fib(n) {
    // Edge case
    if(n < 0) {
      throw new Error("Can't do negative fib.")
    }
    
    // Base case: when to stop
    if(n === 0 || n === 1) {
      return n;
    }
    
    // Bottoms up approach. 
      // Build fib(0) and fib(1)
    let prevPrev = 0 // Fib(0)
    let prev = 1 // Fib(1)
    let current; // Current is a thing 
    
    // Loop through nums and count the number of prevPrev and prev 
      // We fib math. AND we update variables for the next iteration
    for(let i = 1; i < n; i++) {
      // Iterate #1: Current = 2nd fib
      // Iterate #2: Current = 3rd fib etc... 
      current = prev + prevPrev
      prevPrev = prev
      prev = current;
    }
    
    // Return the answer
    return current;
}  



