/*
For this file, I'm just going to run through the leetcode easy 
top interview questions module thing.

I've started it before but kept stopping because it's a bit hard for me sometimes. 

But going through as much of this as I can should be helpful in refreshing my DSAs.

Topics include:
- Strings 
- Arrays 
- Linked Lists
- Trees
- Sorting and Searching
- Dynammic programming 
- Design
- Math
- Others

Trying again, Sept. 
*/


// Arrays! 

// Remove duplicates in place
// We just track the arr's LENGTH. So we just need to count the num of uniq vals
var removeDuplicates = function(nums) {
    nums = nums.sort((a,b) => a-b); 
    let i = 0;
    let j = 0;
    
    while (j < nums.length) {
        nums[i] = nums[j]; 
        i++;
        j++;
        while(nums[j] == nums[j-1]) {
            j++;
        }
    }
    return i;
} 

// Given an array, rotate the array to the right by k non-negative steps
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
var rotate = function(arr, k) {
    let i = 0; 

    while (i < k) {
        // Really all the "shifting" is just moving nums off 
        // the end and adding to the front
        let numToPop = arr.pop();
        arr.unshift(numToPop);
        i++;
    }
    return arr;
}

// Two Sum - Given an arr and a target, return the two indices that sum up to the target
// [2,3,4], 6 => [0,2]

var twoSum = function(nums, target) {
    let seen = {};
    
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i],
            partner = target - curr,
            partnerID = seen[partner];
        if(partnerID !== undefined) {
           return [partnerID, i]
        }
        seen[curr] = i;
    }
}

// Single number: Given an arr of ints, every ele appears twice except for 1. Find the single one.
// [2,3,2,3,4] => 4
var singleNumber = function(arr) {
    let hash = {};
    // create hash of arr w/ vals & # of occurences
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]) {
            hash[arr[i]] = 2;
        } else {
            hash[arr[i]] = 1;
        }
    }
    // Need to loop thru hash
    for(var j in hash) {
        if(hash[j] == 1) {
            return j;
        }
    }
}


// Strings! 

// Reverse a string in-place; don't allocate additional space
    // Two pointer approach

// ["a", "r", "e"] => ["e", "r", "a"]
var reverseString = function(s) {
    let i = 0;
    let j = s.length -1; 
    
    while(i < j) {
        if(i !== j) {
            [s[i], s[j]] = [s[j], s[i]]
        }
        i++;
        j--;
    }
    return s;
};



/*Fizzbuzz
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

function fizzBuzz(num) {
    let res = [];

    for(let i = 1; i <= num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            res.push("FizzBuzz");
        } else if(i % 5 === 0) {
            res.push("Buzz");
        } else if(i % 3 === 0) {
            res.push("Fizz")
        } else {
            res.push(`${i}`) // Reminder: When I want to add variables into a string, `${variable}`
        }
    }
    return res;
}




/*   Maximum Subarray

Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try 
coding another solution using the divide and conquer approach, which is more subtle.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

As we're just returning the largest sum, we don't need to track 
what the arr eles equal that largest sum
*/

var maxSubArray = function(arr) {
    let maxSum = arr[0], 
        bestSoFar = 0;

    for(let i = 0; i < arr.length; i++) {
        if(bestSoFar < 0) bestSoFar = arr[i];
            else bestSoFar = arr[i] + bestSoFar;

        if(bestSoFar > maxSum) {
            maxSum = bestSoFar; 
        }
    }
    return maxSum;
};



/*


*/