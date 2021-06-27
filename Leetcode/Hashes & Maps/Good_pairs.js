


/*
Number of Good Pairs

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

nums = [1,2,3,1,1,3]
Output: 4  =>  (0,3), (0,4), (3,4), (2,5)
*/

// O(n^2) time and O(1) space
var numIdenticalPairsSlow = function(nums) {
    let count = 0; 
    
    // [1,2,3,1,1] => (0,3), (0, 4), (3,4)
    for(let j = 1; j < nums.length; j++) {
        
        for(let i = 0; i < j; i++) {
            if(nums[i] === nums[j]) {
                count++; 
            }
        }
    }
    return count;
};


// O(n) time and O(n) space
var numIdenticalPairs = function(nums) {
    // num : #ofoccurences
    let hash = {},
        count = 0; 
    
    for(let num of nums) {
        if(hash[num]) {
            count += hash[num];
            hash[num]++;
        } else {
            hash[num] = 1; 
        }
    }
    return count;
}





