


/*
Ceiling of a Number

Given an array of numbers sorted in an ascending order, 
find the ceiling of a given number ‘key’. The ceiling 
of the ‘key’ will be the smallest element in the given 
array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of 
the ‘key’. If there isn’t any ceiling return -1.

Example 1:

Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or 
equal to '6' is '6' having index '1'.

Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or 
equal to '12' is '15' having index '4'.

Grokking, not a leetcode. 

Strat: Binary search 
1. Start, end, iterate while start <= end, find
our mid = Math.floor(start + (end-start) /2) bc no floats 
2. What is our target? What are we searching for? 
We're looking for the number that's EITHER equal to 
or is the smallest greater than. 
3. Var: tempSmallest. We update this value based on 
Search thru entire, updating tempSmallest 
4. Return tempSmallest 

Edge:
- Valid input, [], key = 2. Return? -1 
- [1,2,3] key = 8, return? -1

O(log n) time 
*/


//  [1, 3, 8, 10, 15, 20], key = 12
// 4 (idx) 
function ceilingOfANum(arr, key) {

    // Edge case
    if(key > arr[-1]) {
        return -1;
    }

    let start = 0, 
        end = arr.length - 1;

    while(start <= end) {

        let mid = Math.floor((start + (end-start) / 2)); 

        if(arr[mid] === key) {
            return mid; 
        } 
        // move floor & ceiling with if statemetnts 
        if(key > arr[mid]) {
            start = mid + 1; 
        }
        if(key < arr[mid]) {
            end = mid - 1;
        }
    }

    // Since we're running a while loop until start <= end 
    // the next biggest number is going to be start
    return start;
}

