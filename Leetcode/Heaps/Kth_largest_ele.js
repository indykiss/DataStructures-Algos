/*
Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Input: [3,2,1,5,6,4] and k = 2
Output: 5

Strategy:
- Sort the arr
- We want the KTH largest
- Loop starting from the end. Once we hit arr.length - 1 - K, return that value

*/


// Can also do this with a heap. Big day tomorrow to study heaps


// Easy way to do this: 
var findKthLargest = function(nums, k) {
    if(nums.length < 2) {return nums}
    
    let sorted = nums.sort((a,b) => a - b);
    
    return sorted[nums.length - k]
};


