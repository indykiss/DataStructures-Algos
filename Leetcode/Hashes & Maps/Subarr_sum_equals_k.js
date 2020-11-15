/*
Subarray Sum Equals K
Given an array of integers and an integer k, 
you need to find the total number of continuous subarrays 
whose sum equals to k.

nums = [1,2,2,2], k = 4
=> 2 

Qs: Can we assume its a sorted arr? Valid inputs? 
Edge: Not really, but neg ints. Shouldn't affect algo.

LESSON: I was close. My intuition was to use a map, but 
I wasn't super sure why or how to implement so I dropped it. 
In the future, listen to myself and use the map. 
Need to practice how to use a map. 
A hash does not equal a map. 

*/


/*
Strat: Brute force
- Counter
- Nested loops 
    - Outer: Looks at 1st num in subarr
    - Inner: Looks at the nums after 1st num 
    - Calculate sum. If sum == k, count++ 
        - If sum > k, break inner loop 
- Return counter
*/


// Nov, 20 mins
// Intuitive. OK to do this on interview.
// Doesn't pass leetcodes but thats fine
// Time: O(n), O(1) space b/c counter 
var subarraySumIntuit = function(nums, k) {
    let counter = 0; 
    
    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        
        for(let j = i+1; j < nums.length; j++) {
            sum += nums[j];
            
            if(sum === k) {
                counter++;
            }
            if(sum > k) {
                break;
            }            
        }   
    }
    return counter; 
} 
// Edge: zeros, [1, 1, 0, 1],  2  => 3


// Optimal solution, not intuitive. 
var subarraySum = function(nums, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
    
    map.set(0,1);
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        sum = sum + cur;
        let partner = sum - k
        
        if(map.has(partner)) {
            count += map.get(partner);
        } 
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1)            
        }        
    }

    return count;
}




// Attempt #3. Blegh. I'm not good at this
var subarraySum = function(nums, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
    
    map.set(0,1);
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        sum = sum + cur;
        let partner = sum - k
        
        if(map.has(partner)) {
            count += map.get(partner);
        } 
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1)            
        }        
    }

    return count;
}


// Attempt #2. Not great. Do me again 
var subarraySum = function(nums, k) {
    const map = new Map();
    let count = 0; 
    let sum = 0;
        
    map.set(0,1);
    
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        sum += curr;
        if(map.has(sum-k)) {
            count += map.get(sum-k);
        } 
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum,1)
        }
    }
    return count;
};




var subarraySum = function(nums, k) {
    // S1: Make a map and a counter
        // Initialize the map 
    let map = new Map();
    let counter = 0;
    let sum = 0;
    map.set(0,1);
    
    // S2: Loop through the nums
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        // S3: Update sum by adding currentNum
        sum += currentNum;
        // S4: If map has the complement (sum minus target k) 
            // we increment counter
        if(map.has(sum-k)) {
            counter += map.get(sum - k);
        }
        // S5: If map has the sum ??? 
        if(map.has(sum)) {
            map.set(sum, map.get(sum) +1);
        } else {
            // S6: ??? 
            map.set(sum, 1)
        }
    }
    // S7: Return counter
    return counter;
};