


/*
Three sum

Find all the triplets in the given array that add to 
the target sum. 

O(n^2) time and O(n) space since we're holding an array that
can have a lot of triplets


[-3, 0, 1, 2, -1, 1, -2]
[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]

Strat: Two pointer 

1. Sort the arr

2. For loop, ID curr number. ID what the left and right indxs
are for that ele and trigger function 

3. Helper function:
[-3, -2, -1, 0, 1, 1, 2]
curr: 0
left = -1
right = 1

IF sum === 0, add to set
IF sum < 0, increment left by 1
IF sum > 0, decrement right

Triplets being unique: Skip same eles when we're 
implementing helper and within the check for when pairSum == targetSum;

*/

/*
Goal: find ALL UNIQUE triplets within the arr of nums

[-2, 2, 0, -1, 1, 0, 9]
[[-2, 2, 0], [-1, 1, 0]]

Target sum: 0 

Strategy 2: O(n^3) time. O(n) space, worst case saving all nums in arr 
- Nested 3 for loops to find triplets. Looks at EVERY possible 
triplet pairing 

Strategy 1: TBD
- Seen hash table that tracks 1 num 
- 2 pointers tracking 2 nums


* Strategy 3: O(n log n) time at least. O(n) space * 
- Var: triplets arr
- Sort, asc order
- Check the 1st 2 nums and the last num in the arr. 
    - Create logics : O(n * log n) ???? 
        - If sumOf3 < 0, increment 2nd pointer
        - If sumOf3 > 0, decrement right most pointer
        - If sumOf3 === 0, add to triplets arr 
- Handle skipping the nums we've seen 

Edge:
- Zero triplets 
- Arr has fewer than 3 nums 
*/

// x2 in April:
// [-2, 0, 2] => [[-2,0,2]]
function threeSum(nums) {
    if(nums.length < 3) return [];

    let triplets = [];
    
    nums = nums.sort((a,b) => a-b);  
    
    for(let i = 0; i < nums.length - 2; i++) {
        let curr = i, 
            left = i + 1,
            right = nums.length - 1; 
        
        if(nums[i] === nums[i-1] && i > 0) {
            continue;
        }
        
        while(left < right) {
            let sumOf3 = nums[curr] + nums[left] + nums[right];
            
            // We've found a triplet
            if(sumOf3 === 0) {
                triplets.push([nums[curr], nums[left], nums[right]]);
                left++; 
                right--; 
                
                // [-1,-1,1,1,1,1,0,0] => only one [-1,1,0]
                while(nums[left] === nums[left-1]) {
                    left++;
                }
                while(nums[right] === nums[right+1]) {
                    right--;
                }
            }
            
            else if(sumOf3 > 0) {
                right--; 
            }
            else if(sumOf3 < 0) {
                left++;
            }   
        }
    }

    return triplets;   
} 



// 35 mins. close but not quite. needed to look at solution. Nov 
function threeSum(nums) {
    if(nums.length < 3) return []; 
    
    let triplets = [];
    
    nums = nums.sort((a,b) => a-b); // ascending sort 
    
    for(let idx = 0; idx < nums.length; idx++) {
        let left = idx + 1,
            right = nums.length - 1,
            curr = idx;
        
        // skip num dupes
        if(nums[idx] === nums[idx-1] && idx > 0) {
            continue;
        }
        
        while(left < right) {
            let sum = nums[left] + nums[right] + nums[curr];
            if(sum === 0) {
                triplets.push([nums[curr], nums[left], nums[right]]);
                left++;
                right--;
                
                // skip nums we've processed before after we found a match
                while(nums[left] === nums[left-1]){
                    left++;   
                }
                while(nums[right] === nums[right+1]) {
                    right--;
                }

            } else if(sum > 0) {
                right--;
            } else if(sum < 0) {
                left++;
            }
        }
    }
    return triplets;
}



// Most intuitive way to do 3 sum. LC, Oct, Fb/Bloomb
function threeSum(nums) {
    nums = nums.sort((a,b) => a-b);
    let triplets = [];
    
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i+1,
            right = nums.length -1;
        
        // skip numbers we've already seen 
        if(nums[i] === nums[i-1] && i > 0) continue;
        
        while(left < right) {
            let currSum = nums[left] + nums[right] + nums[i];
            
            if(currSum === 0) {
                triplets.push([nums[left], nums[i], nums[right]]);
                left++;
                right--;
                
                // Keep moving if we've seen these nums already 
                while(nums[left] === nums[left-1] && left < right) left++;
                while(nums[right] === nums[right+1] && left < right) right--;
                
            } else if(currSum < 0) {
                left++;
            } else if(currSum > 0) {
                right--;
            }
        }
    }
    return triplets;
}





// Grokking. Same concept as above but using a helper. 
// O(n^2) anyways. So just learn the other way to do it
function threeSum(nums) {
    nums = nums.sort((a,b) => a-b);
    const triplets = [];
    for(let idx = 0; idx < nums.length; idx++) {
        
        if(idx > 0 && nums[idx] === nums[idx-1]) {
            continue;
        } // skip same eles to avoid dupes
        searchForMatchingPair(nums, -nums[idx], idx+1, triplets);
    }
  return triplets;  
};

function searchForMatchingPair(nums, targetSum, left, triplets) {
    let right = nums.length - 1;
    while(left < right) {
        let pairSum = nums[left] + nums[right];
        
        if(pairSum === targetSum) { // found a triplet
            triplets.push([-targetSum, nums[left], nums[right]]);
            left++;
            right--;
            while(nums[left] === nums[left-1] && left < right) {
                left++;
            }
            while(nums[right] === nums[right+1] && left < right) {
                right--;
            }
        } else if(targetSum > pairSum) {
            left++;
        } else {
            right--;
        }
    }
}




// Leetcode and algoexpert

function threeNumberSum(array, targetSum) {
    array = array.sort((a,b) => a-b)
      let triplets = [];
      for(let i = 0; i < array.length - 2; i++) {
          let left = i + 1;
          let right = array.length - 1;
          while(left < right) {
              const sum = array[i] + array[left] + array[right];
              if(sum == targetSum) {
                  triplets.push([array[i], array[left], array[right]])
                  left++;
                  right--;
              } else if(sum < targetSum) {
                  left++;
              } else if(sum > targetSum) {
                  right--;
              }
          }
      }
      return triplets;
  }