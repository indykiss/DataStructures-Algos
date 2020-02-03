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




/*
Suppose we had an arr of n integers sorted in ascending order. 
How quickly could we check if a given integer is in the arr?

Strat: Array is sorted. 
We want to quickly check if integer is in the arr. 
Binary search! Check the midpoint, move floor and ceiling 
depending on if the desired integer is less than or greater
than midpoint.


*/


function contains(array, value) {

  // Check if an integer is present in the array
  // if(array.length === 0) {
  //   throw new Error("Not an array")
  // }
  if(array.length === 1 && array[0] === value) {
    return true;
  }
  
  let floor = 0;
  let ceiling = array.length - 1;
  let firstInt = array[0];
  
  while(floor + 1 < ceiling) {
    const guessIndex = Math.floor((floor + ceiling) / 2)
    const guessValue = array[guessIndex];
    
    if(value === guessValue) {
      return true;
    }
    
    if(guessIndex >= firstInt) {
      floor = guessIndex;
    } else {
      ceiling = guessIndex; 
    }
    
  }
  
  return false;

}

// O(lg(n)) time and O(1) space





/*
You have a function rand7() that generates 
a random integer from 1 to 7. Use it to write 
a function rand5() that generates a random integer 
from 1 to 5.

rand7() returns each integer with equal 
probability. rand5() must also return each 
integer with equal probability.

Lesson: 

*/


function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function rand5() {
  // Simply just reroll when we get larger than 5
  let randomNum = rand7();
  
  while(randomNum > 5) {
    randomNum = rand7();
  }
  return randomNum;
}

// Possibly an infinite loop if we always get 6 or 7
// O(1) space

