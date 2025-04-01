

/*
Peak index in a mountain array:

Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

Input: arr = [0,1,0]
Output: 1

Highest peak definition is the highest number's ith that isn't 
the first or last number
*/

// practice, march 
var peakIndexInMountainArray = function(arr) {
    for(let i = 1; i < arr.length; i++) {
        let prev = arr[i-1], 
            curr = arr[i], 
            next = arr[i+1];
        
        if(curr > prev && curr > next) {
            return i; 
        }
    }
    return null; 
}

var peakIndexInMountainArray = function(arr) {
    let greatest = 0,
        peak = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > greatest) {
            peak = i;
            greatest = arr[i]
        }
    }
    return peak;
};



/*
Slightly different problem: 
  Similar to find peaks problem, you are given an array
  of numbers. The goal here is to return "any one" peak that exist in
  the array. The array will always consist of at least one peak.
  Your solution must run in O(log n) time at worst case.
 
  Input: [3,4,6,9,7,6,2,5,1]
  Output: 9 or 5 are both valid outputs. They are both peaks.
  But you only return one of them.
 
  Strategy: Binary search
   [3, 4, 6, 9, 7]
  - Start, end: Use these to find peak between st/mid/end
     - While loop, mk midpt
     - If A[mid] < A[mid + 1]
         - low = mid + 1
     - else
         - end = mid
   - Return start
 
  Edge cases:
  - Zero peaks : Still need O(log n) time
  - [1, 2, 3, 4] => [4]
  - [1, 1, 1, 1] => [1]
  - Thought: need more space to make more time efficient??
*/


// O(log n) time:
function findPeak(arr) {
    let start = 0,
      end = arr.length - 1;
  
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
  
      // found a peak
      if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
        return mid;
        // look left
      } else if (arr[mid] > arr[mid - 1]) {
        start = mid;
        // look right
      } else {
        end = mid;
      }
    }