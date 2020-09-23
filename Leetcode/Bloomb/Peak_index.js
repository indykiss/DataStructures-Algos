

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
