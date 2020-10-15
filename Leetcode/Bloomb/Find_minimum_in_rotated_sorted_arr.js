


/*
Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Input: [3,4,5,1,2] 
Output: 1
*/



// NOT AT ALL THE SOLUTION 
// But I give up. This is the goal for this Q. 

// O(log n) time and constant space
var findMin = function(nums) {
    if(!nums) return 0;
    
    function binarySearch(start, end, nums) {

        if(start >= end) return nums[start]
        
        let mid = start + (end - start) / 2;
        
        // If midpoint is safe 
        if(nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]) {
            return nums[mid]
        } else {
            // Find the smallest number
            return Math.min(binarySearch(mid + 1, end, nums), 
                            binarySearch(start, mid-1), nums);
        }
    }

    start = 0;
    end = nums.length - 1;
    
    return binarySearch(start, end, nums)
    
}


// O(n) time and O(1) space
var findMin = function(nums) {
    let minEle = Infinity;
    nums.forEach(num => {
        
        if(num < minEle) {
            minEle = num;
        }
    })
    return minEle;
};


// IF we wanted to do this faster, we can maybe do a binary search 
// so we know that one half of the arr will be sorted already 
// binary search is O(log n)


//  def findMin(self, nums: List[int]) -> int:
//         if not nums:
//             return 0
//         def search(lo, hi, nums):
//             if lo >= hi:
//                 return nums[lo]
//             mid = lo + ((hi - lo) // 2)
//             # if number at mid is less than its prefix and its suffix
//             # then that is the min number, otherwise it will be the min
//             # of the right subarray and the left subarray
//             if nums[mid] < nums[mid+1] and nums[mid] < nums[mid - 1]:
//                 return nums[mid]
//             else:
//                 return min(search(mid+1, hi, nums), search(lo, mid-1, nums))
        
//         lo = 0
//         hi = len(nums) - 1
        
//         return search(lo, hi, nums)
