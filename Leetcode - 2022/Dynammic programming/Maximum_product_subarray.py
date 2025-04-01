

# Maximum Product Subarray
# Given an integer array nums, find a contiguous non-empty subarray within 
# the array that has the largest product, and return the product.

# The test cases are generated so that the answer will fit in a 32-bit integer.

# A subarray is a contiguous subsequence of the array.

# Input: nums = [2,3,-2,4]
# Output: 6
# Explanation: [2,3] has the largest product 6.

# Strategy
# Situations: [-2, 2, 3] => 12 
# [-1,2,3,0] =>  0 will stop and reset my subset 
# [3, 4, 5, 10] 
# curr_max -> if we're steadily increasing 
# curr_min -> handle negative numbers 
# result -> max(result, curr_max)

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if len(nums) == 0: return 0 
        
        max_so_far = nums[0] 
        min_so_far = nums[0] 
        result = max_so_far
        
        for i in range(1, len(nums)): 
            curr = nums[i]
            temp_max = max(curr, curr * max_so_far, curr * min_so_far)
            min_so_far = min(curr, curr * max_so_far, curr * min_so_far)
            max_so_far = temp_max 
            result = max(max_so_far, result)
        
        return result

