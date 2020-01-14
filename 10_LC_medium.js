/*
Index of 10 medium leetcodes

1. Multiply strings
2. Product of Array Except Self
3. Merge intervals


*/



// Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, 
// return the product of num1 and num2, also represented as a string.

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Need to memorize this I think 

var multiply = function(num1, num2) {

    let sum = [];
    let hold = 0;
    let totalLength = num1.length + num2.length; 

    // If a num is 0, then it will return 0 
    if(num1 === "0" || num2 === "0") {
        return "0"
    }

    // If a num 1 is, then the answer is the other number
        // Note: all if-else statements are O(1), so nest all I want
    if(num1 === "1" || num2 === "1") {
        if(num1 === "1") {
            return num2
        } else {
            return num1
        }
    }

    let num1Arr = num1.split('').reverse();
    let num2Arr = num2.split('').reverse();

    // Usually nested for loops are O(n^2)
    for(let i = 0; i < totalLength; i++) {
        for(let j = 0; j < num2.length; j++) {
            let k = i - j;

            if(num2[j]) {
                hold = hold + (num1[j] * num2[k])
            }
        }

        if(i === totalLength - 1 && hold === 0) {
            continue;
        }

        sum[i] = hold % 10; 
        hold = Math.trunc(hold/10);
    }

    return sum.reverse().join('');

}


// NOTE: THIS USES BUILT IN METHODS
var multiply = function(num1, num2) {
    
    let result = 0; 
    
    // Step 1: Make string inputs into numbers
        let actualNum1 = Number(num1);
        let actualNum2 = Number(num2);
    
    // Step 2: Multiply them 
    
    result = actualNum1 * actualNum2
    
    // Step 3: Make the result into a string 
    return result.toString();
}

// Uses built in methods; easy
// var addStrings2 = function(num1, num2) {
//     // Step 1: Convert nums to string 
//         let num1Actual = parseFloat(num1)
//         let num2Actual = parseFloat(num2)

//     // Step 2: Do maths and return that 
//         return (num1Actual + num2Actual).toString();
// };



/*
Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such 
that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Strategy: Get the product for all numbers before the index 
Get the product for all numbers after the index 
At the index number we're looking at in our return arr, 
multiply together to get total product (except at index!)

O(n) time

[1,2,3,4] => 
[24,12,8,6]

*/ 

var productExceptSelf = function(nums) {
    
    let prodAllMinusIndex = [];
    let preIndexProd = 1;
    let postIndexProd = 1;
    
    // Get product of all preIndex. Loop starting from front
    for(let i = 0; i < nums.length; i++) {
        prodAllMinusIndex[i] = preIndexProd;
        preIndexProd = preIndexProd * nums[i];
    }
    
    // Get product of all postIndex. Loop starting from back
    for(let i = nums.length - 1; i >=0 ; i--) {
        prodAllMinusIndex[i] = prodAllMinusIndex[i] * postIndexProd;
        postIndexProd = postIndexProd * nums[i];
    }
        
    return prodAllMinusIndex;
};






/*

Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

LOTS OF EDGE CASES. Elements aren't sorted. Merging sometimes means 
an interval gets eaten. Intervals can only be 1. Etc. 

This is the iCal "when are people open" algo.
Except that used hashes instead of arrs. 

Can't assume that all arrays are already sorted. 
Can assume always 2 eles in an interval. 

Strat: Compare 1st arr and 2nd arr intervals[0] & [1]
    if intervals[1][0] is < intervals[0][1] then merge 
        merge being pushing into new arr an arr of int[0][0] and int[1,1]
    if not, leave array alone 

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Lesson learned: I was REALLY close, but I was hardcoding the 
"if this element is less, it goes here but if the other one is less, it goes here"
When I JUST NEEDED TO DO MATH.MIN AND MATH.MAX
I need to remember they exist. So useful. 
BUT got everything else right! The strategy was good! 
But the if/else if/else was too much. Lots of edge cases there. 

*/ 

var merge = function(intervals) {
    
    // Edge case: It's like 1 arr
    if(intervals.length < 2) {
        return intervals;
    }
    // S1: Sort it to make comparison easier
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    // S2: Loop though intervals and ID the eles needed 
    for(var i = 1; i < intervals.length; i++) {
        let previousArr = intervals[i-1]
        let currentArr = intervals[i]
        
        // S3: If floor of currentArr is in previous arr, push merged arr in result
        if(currentArr[0] <= previousArr[1]) {
          intervals[i] = [Math.min(previousArr[0],currentArr[0]), Math.max(previousArr[1],currentArr[1])] 
          intervals.splice(i-1, 1)            
          i = i - 1;  // After merge, the arr becomes shorter
        }
    }
    // S4: Return that baby
    return intervals;
};

