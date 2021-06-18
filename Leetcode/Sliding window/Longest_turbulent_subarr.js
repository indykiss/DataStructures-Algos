

/*
Longest Turbulent Subarray

Given an integer array arr, return the length of a maximum size 
turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between 
each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] 
of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.
 

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

*/


var maxTurbulenceSize = function(arr) {
    if(arr.length === 1) return 1;
    
    let maxLen = 1,
        start = 0,
        allSame = true;

    // edge case: all nums are the same num 
    for(let i = 1; i < arr.length; i++) {
        let prevNum = arr[i-1],
            currNum = arr[i];
        
        if(prevNum !== currNum) {
            allSame = false; 
        }
    }
    
    if(allSame) return 1; 
    
    // Check on tubulence
    for(let end = 0; end < arr.length; end++) {
        let prev = arr[end-1], 
            curr = arr[end],
            next = arr[end+1];

        // Not turbulent, so change window 
        if(end == arr.length-1 || (curr-prev) * (next-curr) >= 0){
            maxLen = Math.max(maxLen, end - start + 1);
            start = end; 
        }
        
    }
    return maxLen;
    
};



