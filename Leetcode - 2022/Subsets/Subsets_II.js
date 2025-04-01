

/*
Subsets II

Given a collection of integers that might contain duplicates, nums, 
return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]


Strat: 
- Vars: subsets [[]], start and end index for which subsets to add a curr num to 
- Sort nums so dupes are next to each other
- Nested for loop. Outer loop looks at all the nums
Inner loop looks at the subsets arr, adding the num from prev loop into the subsets
that we have
- Trick: we dont want to add curr to ALL the subsets IF the curr is a dupe.
ONLY add to the last subset we added if its dupe.
So we get around this by changing our start and end indices.
IF not a dupe: start at 0, end at subsets.length-1
IF IS DUPE: start at end + 1, end is still subsets.length-1
- SO now we want to add num into subsets. In this loop we:
    1. Copy the eles inside the subset. subset[j].slice() 
    2. Add curr into this copy. 
    3. Add copy into the subsets result arr. 
*/


var subsetsWithDup = function(nums) {
    
    let subsets = [[]];
    
    // sort so all dupes are next to each other
    nums = nums.sort((a,b) => a - b);
    
    // make a start and end for which subsets
    // to add curr num to, depending on if it's all the subsets
    // when we're not dealing with a dupe OR it's just the last one
    // if we have a dupe
    let start = 0,
        end = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]; 
        
        // reset the start
        start = 0;
        
        // If curr is a dupe, we only want to add it into the 
        // subset that was created in the last step 
        if(curr === nums[i-1] && i > 0) {
            start = end + 1;
        }
        
        end = subsets.length - 1;
        for(let j = start; j < end + 1; j++) {
            let sub = subsets[j].slice(0) // copies the eles in each subset
            
            sub.push(curr);
            
            subsets.push([...sub]);
        }
    }
    return subsets;
};


