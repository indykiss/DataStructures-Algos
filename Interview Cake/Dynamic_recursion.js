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





/*
Write a function that, given an amount of monies and an array of 
denominations, computes the number of ways to make the 
amount of money with the available denominations. 


Strat: Break down into subproblems. Look at denominations and do maths. 
Check out amount left.

S1: Make this recursively 
S2: Add memoizations 
  Still is recursive. It just reduces calls by saving duplicate ones
S3: Change to bottoms up approach instead. Great way to reduce recursion
  Look at the denominations possible then move up to the total
  

(5, [0.25, 0.50, 1])
 => # of ways I can make the total with the denominations
 
 Lessons: Dynammic is like next level greedy. 
*/
 
 
 
 
/* 
Best! O(n*m) time with n is amount of money and m is number 
of denominations
O(n) space 

Use bottoms up method to build a table waysOfDoingNCents
such that waysOfDoingNCents[k] is how many times we can get
to k cents using our denominations 


Here's how waysOfDoingNCents would look in successive iterations 
of our function for amount=5 and denominations=[1,3,5].

  ===========
  key:
  a = higherAmount
  r = higherAmountRemainder
  ===========
  
  ============
  for coin = 1:
  ============
  [1, 1, 0, 0, 0, 0]
   r  a
  
  [1, 1, 1, 0, 0, 0]
      r  a
  
  [1, 1, 1, 1, 0, 0]
         r  a
  
  [1, 1, 1, 1, 1, 0]
            r  a
  
  [1, 1, 1, 1, 1, 1]
               r  a
  
  ============
  for coin = 3:
  =============
  [1, 1, 1, 2, 1, 1]
   r        a
  
  [1, 1, 1, 2, 2, 1]
      r        a
  
  [1, 1, 1, 2, 2, 2]
         r        a
  
  ============
  for coin = 5:
  =============
  [1, 1, 1, 2, 2, 3]
   r              a
  
  
  final answer: 3


*/
    
function changePossibilities(amount, denominations) {

  // Initalize a new array of zeros with indices that add up to amount
  const waysOfDoingNCents = new Array(amount + 1).fill(0);
  waysOfDoingNCents[0] = 1;
  
  denominations.forEach(denom => {
    for(let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      waysOfDoingNCents[higherAmount] += waysOfDoingNCents[higherAmountRemainder];
    }
  })
  
  return waysOfDoingNCents[amount];

}

 
 
// Good! But just uses memoize + recursion. 
class ChangeMemoize{
  
  constructor() {
    this.memo = {}
  }

  changePossibilities(amountLeft, denominations, currentIndex = 0) {
    // Check our memo and stop if we have it already 
    const memoKey = [amountLeft, currentIndex].join(', ');
    if(memo.hasOwnProperty(memoKey)) {
      console.log("grabbing memo")
      return this.memo[memoKey];
    }
    // base: got it
    if(amountLeft === 0) {
      return answer;
    }
    //Bad: oh no, over shot
    if (amountLeft < 0) {
      return 0;
    }
    //Edge: we're out of denominations 
    if(currentIndex === denominations.length) {
      return 0; 
    }
    console.log("checking ways to make amountleft w/ denominations")
    // Pick a current coin
    const currentCoin = denominations[currentIndex]
    // how many possibilities can we get 
    let possibilities = 0;
    while(amountLeft > 0) {
      possibilities += changePossibilities(amountLeft, denominations, currentIndex + 1)
      amountLeft = amountLeft - currentCoin;
    }
    // save this in our memo: 
    this.memo[memoKey] = possibilities;
    return possibilities;
  }
}

