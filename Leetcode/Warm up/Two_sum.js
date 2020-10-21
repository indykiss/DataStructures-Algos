/* Two Sum

Given an array of integers, return indices of the two numbers 
such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

O(n) solution as we loop once
*/



// Two pointer warm up. Grokking, Oct, FB/ Bloomb

function twoSumPointers(arr, sum) {

    arr = arr.sort((a,b) => a - b);

    let runner1 = 0,
        runner2 = arr.length-1;

    while(runner1 < runner2) {
        if(arr[runner1] + arr[runner2] === sum) {
            return [runner1, runner2];
        } 
    }

}



// Algoexepert: 
// O(n^2) time and O(1) space
function twoNumberSum(array, targetSum) {
	for(let i = 0; i < array.length - 1; i++) {
		let first = array[i];
		
		for(let j = i + 1; j < array.length; j++) {
			let second = array[j];
			
			if(first + second == targetSum) {
				return [first, second]; 
			}
		}
	}
	return [];
}

// O(n) time and O(n) space
function twoNumberSum(array, targetSum) {
	let haveWeSeen = {}
  
	for(let i = 0; i < array.length; i++) {
		let ele = array[i];
		const partner = targetSum - ele;
		
		if(partner in haveWeSeen) {
			return [ele, partner];
		} else {
			haveWeSeen[ele] = true;
		}
	}
	return [];
}



var twoSum = function(nums, target) {
    // Make a hash 
    let hash = {}
    
    // Loop through nums
    for(let i = 0; i < nums.length; i++) {
        // We are looking for the number that completes the below
        let partner = target - nums[i];
        
        // Return if we've found it
        if (hash[partner] !== undefined) {
            return [hash[partner], i];
        } else {
            // If it doesn't, we save it 
            hash[nums[i]] = i
        }
    }    
}



var twoSum = function(arr, target) {
    const seen = {};
    
    for(let i = 0; i < arr.length; i++) {
        let partner = target - arr[i];
        let found = seen[partner]
        
        if(found !== undefined) return [i, found]
        
        seen[arr[i]] = i;
    }
    
    return false;
}
