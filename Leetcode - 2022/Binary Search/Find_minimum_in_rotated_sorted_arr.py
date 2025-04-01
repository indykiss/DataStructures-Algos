


/*
Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot 
unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Input: [3,4,5,1,2] 
Output: 1
*/



# Modified binary search 
# Rotated once? No, n times. 

# Strategy
# Ceiling, floor, midpoint 
# Once we find a ceil that's less than floor, sorted! 
# Update a global min variable with new floor and ignore this floor-> ceiling range (update the floor to mid+1) 
# Keep doing as we iterate through? 


class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]
        
        minidx = 0
        l = 0 
        r = len(nums)-1
        
        # check if there's a rotation at all 
        if nums[r] > nums[0]: return nums[0]
        
        while l<=r:
            m = (l+r)//2
            if nums[m] < nums[minidx]:
                minidx = m
            if nums[minidx] < nums[r]:
                r = m-1
            else:
                l = m+1
        return nums[minidx]


# // JS, badly: 
# // NOT AT ALL THE SOLUTION 
# // But I give up. This is the goal for this Q. 

# // O(log n) time and constant space
# var findMin = function(nums) {
#     if(!nums) return 0;
    
#     function binarySearch(start, end, nums) {

#         if(start >= end) return nums[start]
        
#         let mid = start + (end - start) / 2;
        
#         // If midpoint is safe 
#         if(nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]) {
#             return nums[mid]
#         } else {
#             // Find the smallest number
#             return Math.min(binarySearch(mid + 1, end, nums), 
#                             binarySearch(start, mid-1), nums);
#         }
#     }

#     start = 0;
#     end = nums.length - 1;
    
#     return binarySearch(start, end, nums)
    
# }


# // O(n) time and O(1) space
# var findMin = function(nums) {
#     let minEle = Infinity;
#     nums.forEach(num => {
        
#         if(num < minEle) {
#             minEle = num;
#         }
#     })
#     return minEle;
# };


# // IF we wanted to do this faster, we can maybe do a binary search 
# // so we know that one half of the arr will be sorted already 
# // binary search is O(log n)


# //  def findMin(self, nums: List[int]) -> int:
# //         if not nums:
# //             return 0
# //         def search(lo, hi, nums):
# //             if lo >= hi:
# //                 return nums[lo]
# //             mid = lo + ((hi - lo) // 2)
# //             # if number at mid is less than its prefix and its suffix
# //             # then that is the min number, otherwise it will be the min
# //             # of the right subarray and the left subarray
# //             if nums[mid] < nums[mid+1] and nums[mid] < nums[mid - 1]:
# //                 return nums[mid]
# //             else:
# //                 return min(search(mid+1, hi, nums), search(lo, mid-1, nums))
        
# //         lo = 0
# //         hi = len(nums) - 1
        
# //         return search(lo, hi, nums)
