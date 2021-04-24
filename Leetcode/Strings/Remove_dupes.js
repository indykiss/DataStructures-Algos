

/*
Remove adjacent duplicate words in a string. 

Input: "Where can I can I find find a cat"
=> 
Output: "Where can I find a cat"

Strategy: Backtracking. O(n) time [must look at every word at least once] and O(n) space (we save possibly the same # of words as input)
- 3 words max (where can I where can I) 
- Make an arr separating str by spaces 
- Take the word we have, go back 3 steps (can be optimized to take X number of steps), check if word is the same, if it is, delete curr word 

Edge cases:
- Dupe words multiple words -> can I can I 
- find find find 
- ""
*/



// VERY inflexible solution. Not correct
function removeDupes(str) {
    let arr = str.split(" "); 
  
    for(let i = 1; i < arr.length; i++) {    
      if(arr[i] === arr[i-1]) {
        arr.splice(i,1);
      }
      
      if(i - 2 >= 0) { // this block does not handle duplicate groups. see test2
        if(arr[i] === arr[i-2]) {
          arr.splice(i,1); 
          i--; 
        } 
      }
      
      if(i - 3 >= 0) { // same for here. this checks similarity within intervals of 3 
        if(arr[i] === arr[i-3]) {
          arr.splice(i,1); 
          i--; 
        } 
      }
    }
    return arr.join(" "); 
  }
  

  
  // Working solution below from Dom
  /* 
  Summary of idea ->
  Put words in a stack
  Have an array window of size 3.
  Have a results array.
  While has items in stack
  Pop from stack
  if item exists in window
  While item in window not same, promote to results
  Once item is same, compare leftover of window with same length from beginning of stack.
  If same throw away window contents
  ....
  Move first item in window to result
  Shift window and insert new word from stack.
  Return result
  */
  
  function sol(str) {
    let stack = str.split(" ").reverse();
    let buffer = []; // this should be max size 3
    let results = []; // where we put the de-duped string.
    
    while (stack.length > 0) {
        let cur = stack.pop();
        if (buffer.indexOf(cur) > -1) {
          // promote words that are not dupes to results
          while(buffer[0] !== cur) {
            results.push(buffer.shift());
        }
        // leftover in buffer should be compared to same length in stack.
        // first put back cur in stack so we can compare properly
        stack.push(cur);
        // grab from the end of the stack then reverse it so that it follows the same order.
        let potentialDupe = stack.slice(-buffer.length).reverse(); 
        if (buffer.join(" ") === potentialDupe.join(" ")) {
            // if there's dupes. Start buffer from scratch
          buffer = [];
        }
        // get cur again since we are done comparing.
        cur = stack.pop();
      }
      // make sure buffer stays max 3 words
      if (buffer.length >= 3) {
          results.push(buffer.shift());
      }
      buffer.push(cur);
    }
    // what ever is leftover in buffer should be added to results
    results = results.concat(buffer);
    
    return results.join(" ");
  }
  
  let test2 = "where can I would I find";
  let test3 = "where can he be can it be";
  let test4 = "no no duplicates here here";
  let test5 = "find find find";
  
  console.log(sol(test5));
  /* console.log(solution(test2));
  console.log(solution(test3)); */





/*
Leetcode easy: 

Remove All Adjacent Duplicates In String

Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

Input: "abbaca"
Output: "ca"
*/


var removeDuplicates = function(S) {
  let stack = [];
      
  for(let i = 0; i < S.length; i++) {
      let ele = stack[stack.length - 1],
          curr = S[i]; 
      
      if(ele !== curr) {
          stack.push(curr);
      } else {
          stack.pop();
      }
  }
  
  return stack.join("");
  
};