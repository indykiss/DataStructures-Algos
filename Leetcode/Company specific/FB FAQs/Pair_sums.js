
/*
Pair Sums
Given a list of n integers arr[0..(n-1)], determine the 
number of different pairs of elements within it which sum to k.
If an integer appears in the list multiple times, each copy 
is considered to be different; that is, two pairs are considered 
different if one pair includes at least one array index which the 
other doesn't, even if they include the same values.

Output
Return the number of different pairs of elements which sum to k.

Example 1
n = 5
k = 6
arr = [1, 2, 3, 4, 3]
output = 2
The valid pairs are 2+4 and 3+3.
*/



/*
1. Sort the arr
2. Two pointers. Start and end
3. If the first 2 eles are < k, decrement right pointer
If equal k, counter++ and both pointers go in


brute force, too time inefficient:
function pairSum(arr, target) {
    let counter = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) counter++;    
        }
    }
    return counter;
}


Only works if values are all uniq:
function numberOfWays(arr, k) {
  let counter = 0,
      left = 0,
      right = arr.length - 1;
  
  while(left < right) {
    let currSum = arr[left] + arr[right];
    if(currSum === k) {
      counter++;
      left++;
      right--;
    } else if(currSum > k) {
      right--;
    } else if(currSum < k) {
      left++;
    } 
  }
  return counter;
}

*/

// Not a leetcode; it's a FB code exercise in their hub

function numberOfWays(arr, k) {
  
  let hash = {},
      counter = 0;
  
  for(let i = 0; i < arr.length; i++) {
    let partner = k - arr[i];
 
    if(hash[partner]) {
      let i = 0;
      while(i < hash[partner]) {
        counter++;     
        i++;
      }
    }
    
    if(hash[arr[i]]) {
      hash[arr[i]] = hash[arr[i]] + 1;
    } else {
      hash[arr[i]] = 1;
    }
  }
  
  return counter;
}

