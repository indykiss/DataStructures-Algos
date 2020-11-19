/*
Move Zeroes

Given an array nums, write a function to move all 0's to the end 
of it while maintaining the relative order of the non-zero elements. Do this in-place. 

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Loop through the arr, if it's zero push it to end of arr. And remove 0 from place.
Else, do nothing.
*/


// Qs: negatives? 0s are guaranteed? nums are guaranteed? 
// any decimals? in place or ok to create new arr? 
// all zeros possible? O(n) time and O(1) space 
var moveZeroes = function(nums) {
    let left = 0,
        right = 0;
    
    while(right < nums.length) {
        
        if(nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    return nums;
}

// meh, its fine. 
// needed 3 hints 
var moveZeroes = function(nums) {
    let left = 0,
        right = 0;
    
    while(right < nums.length) {
        if(nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    return nums;
}


// Like 20+ mins + looked at solution. 
// Nov. Pathetic. 
var moveZeroesIterate = function(nums) {
    // Situation: if we have leading zeros
    for(let i = nums.length - 1; i >= 0; i--) {
        let curr = nums[i];
        
        if(curr === 0) {
            let temp = nums.splice(i, 1); // ith index, only slice 1 element 
            nums.push(temp);
        }
    }
    return nums;
} 

// What if we can't use .splice? Two pointers
// Swap using 2 left starting pointers, move the zeros to the end
// edge: [0, 0, 2]
var moveZeroes = function(nums) {
    let r1 = 0,
        r2 = 0
    
    while(r2 < nums.length) {
        if(nums[r2] !== 0) {
            [nums[r1], nums[r2]] = [nums[r2], nums[r1]]; 
            r1++;
        } 
        r2++;
    }
    return nums;
}



// Sept bloomb, do me again:
var moveZeroes = function(nums) { 
    // If we get a zero, remove it from that spot and add to the end
    for(let i = nums.length; i >= 0; i--) {
        let num = nums[i]
        if(num === 0){
            nums.splice(i, 1);
            nums.push([0])
        }
    }
}


// [0,1,0,3,12] => [1,3,12,0,0]
// not passing leetcode tests but console.logs correctly
var moveZeroes = function(nums) {
    let numOfZeros = 0, 
        res = [];
    
    for(let num of nums) {
        if(num != 0) {
            res.push(num); 
        } else {
            numOfZeros++;
        }
    }    
    while(numOfZeros > 0){
        res.push(0)
        numOfZeros--;
    }
    return res;
}


var moveZeroes = function(nums) {
    for(var i = nums.length; i >= 0; i--) {
        if(nums[i] === 0) {
            // Remove the zero from its original place 
            // Push the zero in the end of the arr
            nums.splice(i, 1);
            nums.push([0]);
        }
    }
};


var moveZeros = function(nums) {
    for(let i = nums.length; i>=0; i--) {
        if(nums[i] == 0) {
            nums.splice(i,1);
            nums.push([0]);
        }
    }
}