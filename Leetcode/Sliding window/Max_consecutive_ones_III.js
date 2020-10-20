
/*
Max Consecutive Ones III

Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s. 


Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation: 
[1,1,1,0,0,1,1,1,1,1,1]


Strat: Sliding Window
- Vars: start, for w/ end, maxLength, count the num of ones we have
- IF we've reached a point where our windowLength - numOfOnes is ever
greater than K, we want to change that. B/c that breaks the rule.
- Move our window start up and decrement maxOnesCount if the num is a 1
- Each iteration always update the maxLength
- return maxLength;
*/


var longestOnes = function(A, K) {
    let start = 0,
        maxLength = 0,
        maxOnesCount = 0;
    
    for(let end = 0; end < A.length; end++) {
        let num = A[end];
        
        if(num === 1) {
            maxOnesCount++;
        }

        // If we have more zeros than K, we want to move
            // our start point up and ID if that's a zero or a 1
            // and decrement our maxOnesCount 
        if((end-start+1 - maxOnesCount) > K) {
            let startNum = A[start]

            if(startNum === 1) {
                maxOnesCount--;
            }
            start++;
        }
        
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength;
};




