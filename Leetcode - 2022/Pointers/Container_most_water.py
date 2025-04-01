
# Container With Most Water
# You are given an integer array height of length n. There are n vertical lines 
# drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the 
# container contains the most water.

# Return the maximum amount of water a container can store.

# Strategy: 
# Brute force: 
#     - Nested for loop, look at all two lines to find the water volume between each pairing. Global max to track  
#     - O(n^2) time and O(1) space
    
# Alt: 2 pointers, one at beg and one at the end 
#     - Move the shorter of the two pointers up, trying to find a bigger pointer 
#     - Update max_area variable 
#     - O(n) time and O(1) space


class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0 
        left = 0
        right = len(height)-1 
        
        while left < right: 
            curr_area = (right-left) * min(height[left], height[right])
            max_area = max(max_area, curr_area)
            if height[left] <= height[right]: 
                left += 1 
            else: 
                right -= 1 
        
        return max_area