
/*
Find K Closest Elements

Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]

Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]


Strategy:
- Implement a binary search to find the closest elements to X
- Use a two pointer approach to find the window of K elements around the particular X target 

*/


var findClosestElements = function(arr, k, x) {
    // Binary search 
    let left = 0;
    let right = arr.length - 1;
    let mid;
    let answer = [];
    
    while(right > left) {
        mid = Math.ceil((right + left) / 2)
        // Note: Math.ceil is MUCH faster than Math.floor 
        // Boom found it
        if(arr[mid] === x) {
            left = mid; 
            right = mid; 
            break;
        // Reposition mid as floor
        } else if(arr[mid] < x) {
            left = mid + 1; 
        // Reposition mid as ceiling 
        } else {
            right = mid - 1;
        }
    }

    if(left === right) {right++}
    if(left > right) {
        [left, right] = [right, left];
    }
    
    
    // Two pointer approach to narrow window of eles around X by number of K
    // Ya idk whats going on here
  while (k > 0) {    
    if (left < 0) {
      answer.push(arr[right]);
      right++;
    } else if (right >= arr.length) {
      answer.unshift(arr[left]);
      left--;
    } else {
      if (arr[right] - x < x - arr[left]) {
        answer.push(arr[right]);
        right++;
      } else {
        answer.unshift(arr[left]);
        left--;
      }
    }
    
    k--;
  }
    
    return answer;
};