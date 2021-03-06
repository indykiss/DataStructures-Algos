


/*
Find Peak Element

A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

Do this in O(log n) time. So modified binary search 

*/

// O(log n) solution with binary search
var findPeakElement = function(arr) {  
    if(arr.length === 1) return 0;  // fast finish
    
    let left = 0, 
        right = arr.length - 1;
            
    while(left <= right) {
        let mid = Math.floor(right - left / 2) + left; 

        // Edge if peak is at 0 
        if(mid === 0 && arr[mid] > arr[mid+1]) return mid; 
        
        // Edge: if peak is at end of arr
        else if(mid === arr.length -1 && arr[mid] > arr[mid-1]) return mid; 
        
        // Traditional mid-arr peak
        else if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
            
        // Ok, no hit, let's update left and right 
        } else if(arr[mid] < arr[mid - 1] ) {
            right = mid - 1;
        } else if (arr[mid] < arr[mid + 1]) {
            left = mid + 1; 
        }
    }
    return -1;
} 