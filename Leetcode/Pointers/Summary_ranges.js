
/*
Summary Ranges

You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers 
in the array exactly. That is, each element of nums is covered by 
exactly one of the ranges, and there is no integer x such that x 
is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"


Strategy, basically:
- Iterate thru nums 
- Left and right pointer
- While right pointer + 1 = next element, keep incrementing right pointer. 
BUT if not, push into result array a concatenated string of arr[left] -> arr[right]
    - Reassign the left and right pointer 
- But if [1, 1, 1] => ["1"]
    - Add if statement arr[left] === arr[right], push to res arr the num.toString()
Note: use num.toString(); 

*/


var summaryRanges = function(nums) {
    let res = [], 
        i = 0
    
    for(let j = 0; j < nums.length; j++) {
        if(nums[j+1] === nums[j] + 1) {
            continue;
        } else {
            if(i === j) {
                res.push(nums[i] + "")
            } else {
                let ele = nums[i].toString() + "->" + nums[j].toString();
                res.push(ele)
            }
            i = j + 1
        }   
    }
    return res;
};



