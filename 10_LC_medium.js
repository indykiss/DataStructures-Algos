/*
Index of 10 medium leetcodes

1. Multiply strings
2. Product of Array Except Self



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

