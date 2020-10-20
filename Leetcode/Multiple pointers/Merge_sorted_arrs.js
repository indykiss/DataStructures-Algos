/* 
Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 
into nums1 as one sorted array.

Note:
The number of eles initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or 
equal to m + n) to hold additional elements from nums2.

Example:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/





// Oct, FB. Definitely do me again. I wasn't paying attention
var merge = function(nums1, m, nums2, n) {
    let idx1 = m - 1,
        idx2 = n - 1;
    
    for(let i = m + n - 1; i >= 0; i--) {
        if(idx2 < 0) {
            break
        };
        
        if(nums1[idx1] > nums2[idx2]) {
            nums1[i] = nums1[idx1];
            idx1--;
        } else {
            nums1[i] = nums2[idx2];
            idx2--;
        }
    }
    
    return nums1;
};



// IF can use sort: 
var merge = function(nums1, m, nums2, n) {   
    nums2.splice(n, nums2.length - n);
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};


// If can't use sort:    
/* 
Compare 1st index in both arrs. Iterate through nums1, bc that 
will always be bigger in length
Smallest value of the 2 1st indices gets pushed into nums1
Keep going until n reaches 0, decrement n as we go
*/

var merge = function(nums1, m, nums2, n) {
    // JS arrs are dymanic, we don't need the extra 0s at the end
    nums1 = nums1.splice(m, nums1.length)
    
    // Keep track of the indices
    let currentIndexNums1 = 0;
    let currentIndexNums2 = 0;
    let currentMergedIndex = 0;
    const result = [];
    
    while(currentMergedIndex < (nums1.length + nums2.length)) {
        const isNums1Done = currentIndexNums1 >= nums1.length;
        const isNums2Done = currentIndexNums2 >= nums1.length;

        if(!isNums1Done && nums1[currentIndexNums1] < nums2[currentIndexNums2]) {
            result.push(nums1[currentIndexNums1]);
            currentIndexNums1++ 
        } 
        
        if(!isNums2Done && nums2[currentIndexNums2] < nums1[currentIndexNums1]){
            result.push(nums2[currentIndexNums2]);
            currentIndexNums2++;
        }
        currentMergedIndex++;
    }
    return result;
};
    