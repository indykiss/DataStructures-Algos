



/*
Top K Frequent Elements


Given a non-empty array of integers, return the k most 
frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Strategy:
- hash table of # : # of occurrence 
- sort the hash by frequency 
    
- ID k number of top hash keys to return 
    - Alt: creating an arr in order of frequency 
    - Pull off k number of uniq numbers 
    - Add nums to set, once set.size == k, return set.toArr();


[2, 2, 1] 1 => [2]
[1, 1, 1, 2, 2, 3, 4, 5] 2 => [1, 2]
[1, 1, 2, 2, 3, 3, 4, 5] 2 => [1, 2] multiple answers 


*/

// Passed with flying colors 
var topKFrequent = function(nums, k) {

    let hash = {},
        res = [],
        idx = 0;
    
    for(let num of nums) {
        if(hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }
    
    let allKeys = Object.keys(hash).sort((a,b) => hash[a] - hash[b]); // synatically maybe off? 
     // most freq keys at front of hash
     // arr of all the keys in order of frequency
    
    while(idx < k) {
        let mostFrequentKey = allKeys.pop();
        
        res.push(mostFrequentKey);
        idx++;
    }
    
    return res;
};