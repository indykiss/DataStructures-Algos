
# Majority Element
# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. 
# You may assume that the majority element always exists in the array.

 
# Input: nums = [3,2,3]
# Output: 3

# Input nums = [2,2,1,1,1,2,2]
# Output: 2

# o(n) time/ space
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        h = {}
        max_occ = int()
        max_num = int()
        for n in nums:
            h[n] = 1 + h.get(n, 0)
        
        for num, occ in h.items():
            if occ > max_occ:
                max_occ = occ
                max_num = num
        return max_num


# Boyer-Moore algorithm, O(n) time and O(1) space 
# Count instances of a num as +1 and all other eles -1
# Suming to find the majority element
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0 
        candidate = None
        
        for num in nums: 
            if count == 0: 
                candidate = num 
            if num == candidate: 
                count += 1
            else:
                count -= 1
            
        return candidate
        
        
# O(n) time and space
class SolutionHeavy:
    def majorityElement(self, nums: List[int]) -> int:
        freq = {}
        
        for num in nums:
            freq[num] = 1 + freq.get(num, 0)
            
        for key, val in freq.items():
            if val > len(nums)//2:
                return key
            
        
