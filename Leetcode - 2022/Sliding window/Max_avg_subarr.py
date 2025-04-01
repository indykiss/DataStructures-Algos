
# Maximum Average Subarray I

# You are given an integer array nums consisting of n elements, 
# and an integer k.

# Find a contiguous subarray whose length is equal to k 
# that has the maximum average value and return this value. 
# Any answer with a calculation error less than 10-5 will be accepted.

# Input: nums = [1,12,-5,-6,50,3], k = 4
# Output: 12.75000

# Strategy
# Sliding window of length k 
    # Find average of nums in window 
    # Compare with max avg we've seen so far 

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        max_total = sum(nums[:k])
        curr_total = sum(nums[:k])
        
        for i in range(k, len(nums)): 
            curr_total += nums[i] # add new num at end of window
            curr_total -= nums[i-k] # remove num from beg of window
            max_total = max(curr_total, max_total) 
            
        return max_total/k