



/*
Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some 
elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?


Strat: Cyclic sort
*/


/* Cyclic sort way to do this. Which I don't really get... 
BUT PASSES THE TESTS

Grokk. Oct. 
*/
var findDuplicates = function(nums) {
    let i = 0,
        dupes = [];
    
    while(i < nums.length) {
        let j = nums[i]-1;
        
        if(nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        let prev = nums[i-1],
            curr = nums[i];
        
        if(curr !== i+1) {
            dupes.push(curr);
        }
    }    
    return dupes;
};


// Using a hash to count # of occurences
// DOESNT PASS TESTS BUT WOULD BE THE MOST INTUITIVE 
var findDuplicates = function(nums) {
    let dupes = [],
        hash = {};

    for(let num of nums) {
        if(hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }

    for(let num of nums) {
        if(hash[num] > 1) {
            dupes.push(num);
        }
    }
    return dupes;
}

// Another way to do this, which I didn't study or do
// but is a good way. 
var findDuplicates = function(nums) {
    const duplicates = []; 

    for (const currentNum of nums) {
        // Get the index that currentNum points to:
        // Note: we have to use Math.abs because the currentNum 
        // could have been flipped:
        const otherIndex = Math.abs(currentNum) - 1;

        // If the number at otherIndex > 0 (hasn't been flipped):
        if (nums[otherIndex] > 0) {
            // Flip it to negative to mark that we've visited it:
            nums[otherIndex] = nums[otherIndex] * (-1);
        }
        // If the number at otherIndex < 0 (has been flipped):
        else {
            // We know that we've visited this currentNum before because
            // it leads us to the same number.
            duplicates.push(Math.abs(currentNum));
        }
    }
    return duplicates;
};



// Different question. Find the 1st duplicate 

// Easy way: O(n) time and O(n) space
function firstDuplicateValue(array) {
    const tracker = new Set();
      
      for(let num of array) {
          if(tracker.has(num)) return num;
              tracker.add(num);
      }
      
      return -1;
  }

// Google way: O(n) time and O(1) space 
/* Sort the array using two runners, 1 fast and 1 slow 

Treat the array like it's a linkd list and we're trying to 
find a cycle. 
*/
function firstDuplicateValue(nums) {

    let slow = nums[0], 
        fast = nums[nums[0]];
    
    while(slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    slow = 0; 

    while(slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

}