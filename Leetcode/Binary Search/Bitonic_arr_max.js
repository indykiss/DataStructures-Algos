


/*
Bitonic Array Maximum 

Find the maximum value in a given Bitonic array. 
An array is considered bitonic if it is monotonically 
increasing and then monotonically decreasing. Monotonically 
increasing or decreasing means that for any index i in the 
array arr[i] != arr[i+1].


Input: [1, 3, 8, 12, 4, 2]
Output: 12
Explanation: The maximum number in the input bitonic 
array is '12'.

Input: [3, 8, 3, 1]
Output: 8

Input: [1, 3, 8, 12]
Output: 12


Strategy: Binary search 

A bitonic array is a sorted arr; the only difference is 
that its first part is sorted in ascending order and the 
second part is sorted in descending order. We can use a 
similar approach as discussed in Order-agnostic Binary 
Search.
B/c there are no dupes, whenever we calculate the middle, 
we can compare the nums pointed out by the index middle 
and middle+1  to find if we are in the ascending or the
descending part. So:

1. If arr[middle] > arr[middle + 1], we are in the second 
(descending) part of the bitonic array. Therefore, our 
required number could either be pointed out by middle or 
will be before middle. This means we will be doing: 
end = middle.

2. If arr[middle] < arr[middle + 1], we are in the first 
(ascending) part of the bitonic array. Therefore, the 
required number will be after middle. This means we will 
be doing: start = middle + 1.

We can break when start == end. Due to the two points 
mentioned above, both start and end will be pointing at 
the maximum number of the bitonic array.



*/

// Oct, FB/ Bloomb. Only Grokking, not leetcode 
const find_max_in_bitonic_array = function(arr) {
    let start = 0,
        end = arr.length - 1;
    while(start <= end) {
      let mid = Math.floor(start + (end-start) / 2);
      if(arr[mid] > arr[mid + 1]) {
        end = mid;
      } else {
        start = mid + 1
      }
    }
    return arr[start];
};

// Time: O(log n), space: O(1)



/*
Original approach which was wrong apparently. 

Strat: Binary search
- Any index can have the max value but we know that 
it increases to a peak then decreases to the min
- look at start, look at mid. Compare. If start < mid, 
then we're looking at the increasing part of it. 
If start > mid, then we're looking at the decreasing part. 
Change the way we move floor/ ceiling
- Whenever we find a midPt that is larger than both start and 
end point, then that's the largest value
*/