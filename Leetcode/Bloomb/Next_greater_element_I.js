

/*
Next Greater Element I

You are given two arrays (without duplicates) nums1 and nums2 
where nums1’s elements are subset of nums2. Find all the next 
greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater 
number to its right in nums2. If it does not exist, output -1 for this number.

[4,1,2], [1,3,4,2]
[-1, 3, -1]
[There is no greater number, in the 2nd arr the next num that's greater is 3, 2 is at 
the end so there's no greater num]
*/


// [4,1,2]
// [1,3,4,2]
// [-1, 3, -1]
var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    
    for(let i = 0; i < nums1.length; i++) {
        let isNum = false,
            curr = nums1[i];
        
        for(let j = 0; j < nums2.length; j++) {
            
            if(curr == nums2[j]) {
                isNum = true
            }
    
            if(isNum && nums2[j] > curr) {
                res.push(nums2[j]);
                isNum = false;
            }
            if(isNum && j == nums2.length - 1) {
                res.push(-1)
            }
        }
    }
    return res;    
};