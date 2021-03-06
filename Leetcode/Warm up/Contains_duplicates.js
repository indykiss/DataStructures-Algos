
/*
Contains Duplicate I
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
    let seen = new Set();

    for(let num of nums) {
        if(seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};



/*
Contains Duplicate II

Given an array of integers and an integer k, find out whether there are 
two distinct indices i and j in the array such that nums[i] = nums[j] 
and the absolute difference between i and j is at most k.

Input: nums = [1,2,3,1], k = 3
Output: true

Goal: - 2 dupe nums where difference in position is at most K 
True if has this dupe. False if not 

Strat: O(n) time, O(n) space
- Iterate thru nums
    - check if hash has num 
    - if so, check that i - hash[val] <= k
        - true
- Return false 
*/

var containsNearbyDuplicate = function(nums, k) {

    let seen = {};
    
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i], 
            dupeIdx = seen[curr];
        
        if(i - dupeIdx <= k) {
            return true; 
        } else {
            seen[curr] = i; 
        }
        
    }
    return false; 
};



/*
Contains Duplicate III

Given an array of integers, find out whether there are two 
distinct indices i and j in the array such that the absolute 
difference between nums[i] and nums[j] is at most t and the 
absolute difference between i and j is at most k.

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true


Strategy: O(n^2) time, O(n) space bc hash 
- Var: {num : idx}
- Iterate thru the arr of ints
    - curr is num we are looking at 
    - Checking:
        - Iterate thru hash, check if any nums in hash 
        is within t of curr 
            - Check that i and j is at most k 

Edge:
- Multiple matches => true 
- [] 
- 
*/

// Naive, too slow way to do this 
function containsDupes(arr, t, k) {
    let seen = {}; 

    for(let i = 0; i < arr.length; i++) {
        let curr = arr[i];

        for(let num in seen) {
            if(Math.abs(num - curr) <= t) {
                let pairIdx = seen[num]; 
                if(Math.abs(pairIdx - i) <= k) {
                    return true 
                }
            }
        }
        seen[curr] = i; 
    }
    return false; 
}


// Faster, smarter way to do this: O(n) time and O(1) space 
var containsNearbyAlmostDuplicate = function(arr, k, t) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j <= i + k; j++) {
            if(Math.abs(arr[j] - arr[i]) <= t) {
                return true
            }
        }
    }
    return false;
} 