
/*
Rotate String

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Input: A = 'abcde', B = 'cdeab' => Output: true


Strategy: O(n^2);
- Iterate thru A: When we reach the beginning of the 
B string, let's check if the two halves of A string is 
same as B 

- Early fail: if A.length != B.length, return false 

Edge:
- A === B, true 
- Capitalization? nothing is capitalized 
- duplicate letters in string is possible 
- If A has a letter that B doesnt have, false 
*/

var rotateString = function(A, B) {
    if(A.length !== B.length) return false; 
    if(A === B) return true; 
    
    // ABCDE , CDEAB
    for(let i = 0; i < A.length; i++) {
        let secondHalf = A.slice(i) === B.slice(0, B.length - i),
            firstHalf = A.slice(0,i) === B.slice(-i)
        
        // AB C DE , C DE AB
        if(A[i] === B[0]) {
            // firstHalf : 'AB' =  "AB"
            // secondHalf : 'DE' = slice from back 'DE'
            if(firstHalf && secondHalf) {
                return true;
            }
        }
    }
    return false;
};



