/*
I have an array of n + 1 numbers.
Every number in the range 1..n appears once 
except for one number that appears twice.

Write a function for finding the number that appears twice.

Strat: 
Hash for track number of times we see a num. 
Bit manipulation? XOR for when the 

*/

function findRepeat(numbers) {

  // Edge
  if(numbers.length < 2) {
    throw new Error("Length must be at least 2")
  }
  
  const n = numbers.length - 1;
  const sumWithOutDupe = (n * n + n) / 2;
  const realSum = numbers.reduce((acc, cur) =>
    acc + cur, 0);
    
  return realSum - sumWithOutDupe;
}

// O(n) time and O(1) space
