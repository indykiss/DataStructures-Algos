

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