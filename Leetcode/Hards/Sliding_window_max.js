
/*

Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of 
size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window 
moves right by one position.

Return the max sliding window.



Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7



Strategy: O(N) time
- Max num in a sliding window of size K => Stack
- BUT it's a custom heap where we track the indices
of the nums that are entering and exiting the num


Strategy: SUPER time inefficient, O(n^2)
- Use 2 pointers as window 
- For each iteration, use helper function that loops thru 
the window and finds the max 
OR, use an inner nested loop to ID max
- Add max to res arr 
BUT we can do better because we consistently will remove
the 1st num from the prev window and add in the next new number 

*/



function maxSlidingWindow(nums, k) {

    const q = []; // stores indices
    const res = [];

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i],
            smallestPositionInQ = q[q.length - 1],
            smallestNumInQ = nums[smallestPositionInQ]; 

        while(q.length > 0 && curr >= smallestNumInQ) {
            q.pop(); // remove from q any num smaller than the incoming num
        }

        q.push(i);

        // remove 1st num if not in window
        if(q[0] === i - k) {
            q.shift();
        }

        // if window has k eles, add to res
            // k-1 bc we have empty window and add 1 as we go
        if(i >= k-1) {
            res.push(nums[q[0]]);
        }
    }


}