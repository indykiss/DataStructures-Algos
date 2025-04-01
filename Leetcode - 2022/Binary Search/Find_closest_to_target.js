


/*
Minimum Difference Element

Given an array of numbers sorted in ascending order, 
find the element in the array that has the minimum 
difference with the given ‘key’.


Input: [4, 6, 10], key = 7
Output: 6
Explanation: The difference between the key '7' and '6' 
is minimum than any other number in the array 

Input: [4, 6, 10], key = 4
Output: 4

Strat: Binary search traditional 
- When we find the target, look at the start and end eles.
Find which one has the smallest diff and return that one. 
*/

// Grokking, not leetcode. Kinda close enough. Oct. 
var minimumDiffEle = function(arr, key) {
    let start = 0,
        end = arr.length - 1;

    while(start <= end) {

        let mid = Math.floor(start + (end-start)/2);

        if(arr[mid] === key) {
            start = mid - 1;
            end = mid + 1;
            break;
        }

        if(target < arr[mid]) {
            end = mid - 1; 
        }
        if(target > arr[mid]) {
            start = mid + 1;
        }
    }

    // [4, 6, 10], 7 => 6
    // 10 - 6   ,    6 - 4
    // 4    ,    2
    if((arr[end] - arr[mid]) > (arr[mid] - arr[start])) {
        return arr[start];
    } else {
        return arr[end];
    }

}