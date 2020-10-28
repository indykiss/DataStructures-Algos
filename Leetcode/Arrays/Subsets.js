

/*
Subsets

Given a set of distinct integers, nums, return all possible subsets (the power set).

Solution must not have dupe subsets. So use a set to track the subsets.

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

Bloomb:
*/


// Oct. Another way to solve this using BFS

var subsets = function(nums) {
    // start with empty subset
    let res = [[]]

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        // take existing subsets and add new curr to them
        for(let j = 0; j < res.length; j++) {
            let sub = subsets[j].slice(0); // clone permutation
            sub.push(curr); 
            res.push(sub);
        }
    }
    return res;
}
// O(2^N) time since we exponentially add output
// as we add input size. O(2^N) space for same reason



// Oct. Getting better at this one. Makes sense. 
var subsets = function(nums) {
    let res = [[]];

    nums.forEach(num => {
        res.forEach(arr =>{
            res.push([...arr, num]);
        })
    })
    
    return res;
};


// Basically copied and pasted. :[ 
var subsets = function(nums) {
    let set = [[]];
    
    nums.forEach(num => {
        set.forEach(subSet => {
          set.push([...subSet, num])  
        })
    })
    return set;
};

var subsets = function(nums) {
    let set = [[]]
    
    nums.forEach(num => {
        set.forEach(subset => {
            set.push([...subset, num])
        })
    })
    return set;
};



// Practice again
var subsets = function(nums) {
    let set = [[]];
    nums.forEach(num => {
        set.forEach(subset => {
            set.push([...subset, num]);
        })
    })
    return set;
}

// Another slightly different way
var subsets = function(nums) {
    let set = [[]]

    for(let i = 0; i < nums.length; i++) {
        // we want to loop through the set to concat the new num
        for(let arr of [...subset]) {
            set.push(arr.concat(num));
        }
    }
    return set; 

}