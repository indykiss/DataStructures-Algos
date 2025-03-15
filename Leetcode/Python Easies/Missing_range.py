
# Missing Ranges

# You are given an inclusive range [lower, upper] and a sorted 
# unique integer array nums, where all elements are in the inclusive range.

# A number x is considered missing if x is in the range 
# [lower, upper] and x is not in nums.

# Return the smallest sorted list of ranges that cover every 
# issing number exactly. That is, no element of nums is in any 
# of the ranges, and each missing number is in one of the ranges.

# Each range [a,b] in the list should be output as:

# "a->b" if a != b
# "a" if a == b


# Input: nums = [0,1,3,50,75], lower = 0, upper = 99
# Output: ["2","4->49","51->74","76->99"]



class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        res = []        
        
        def formatRange(low, high): 
            if low == high: 
                return str(low)
            return str(low) + "->" + str(high)
        
        prev = lower - 1
        for i in range(len(nums)+1): 
            curr = nums[i] if i < len(nums) else upper + 1
            if prev + 1 <= curr - 1:
                res.append(formatRange(prev+1, curr-1))
            prev = curr
            
        return res


# slight change
Missing Ranges
You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.
A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
Return the shortest sorted list of ranges that exactly covers all the missing numbers. That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]
Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]

class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[List[int]]:
        missing = []

        if len(nums) == 0:
            missing.append([lower, upper])
            return missing

        # before 1st ele, check if we're missing anything
        if lower < nums[0]:
            missing.append([lower, nums[0]-1])

        #between els in arr, find missing nums 
        for i in range(1, len(nums)):
            num1, num2 = nums[i-1], nums[i]
            if num2 - 1 != num1: 
                missing.append([num1 + 1, num2 - 1])

        # after last num, check if missing any 
        if upper > nums[-1]:
            missing.append([nums[-1] + 1, upper])

        return missing
    
    
    
                
