
# Largest Number At Least Twice of Others

# You are given an integer array nums where the largest integer is unique.

# Determine whether the largest element in the array is at least 
# twice as much as every other number in the array. If it is, 
# return the index of the largest element, or return -1 otherwise.

class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        max_num = nums[0]
        idx = 0 
        
        for i in range(len(nums)):
            num = nums[i]
            if num > max_num: 
                max_num = num 
                idx = i
    
        for num in nums: 
            if max_num == num:
                continue 
            if max_num < (2 * num): 
                return -1 
            
        return idx
                