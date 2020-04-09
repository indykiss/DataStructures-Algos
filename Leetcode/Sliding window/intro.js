/* Maximum Sum Subarray of Size K (easy)

Given an array of positive numbers and a 
positive number ‘k’, find the maximum sum of 
any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
*/


const max_sub_array_of_size_k = function(k, arr) {
    // TODO: Write your code here
  
    let max = 0,
        start = 0,
        tempSum = 0;
  
    for(let end = 0; end < arr.length; end++) {
      tempSum = tempSum + arr[end];
  
      if(end >= k - 1) {
        max = Math.max(max, tempSum);
        tempSum = tempSum - arr[start];
        start = start + 1;
      }
    }
    if(max > 0) {
      return max;
    }
};



  function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }



/*   
Given an array of positive numbers and a
positive number ‘S’, find the length of the
smallest contiguous subarray whose sum is 
greater than or equal to ‘S’. Return 0, if
no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great 
than or equal to '7' is [5, 2].

*/



function smallest_subarray_with_given_sum(s, arr) {
    let windowSum = 0,
      minLength = Infinity,
      windowStart = 0;
  
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // shrink the window as small as possible until the 'window_sum' is smaller than 's'
      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }
  
    if (minLength === Infinity) return 0;

    return minLength;
}