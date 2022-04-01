# Third Maximum Number

# Given an integer array nums, return the third distinct maximum 
# number in this array. If the third maximum does not exist, return the max num

# Strategy
# Min heap of size 3 
# Iterate thru the nums: 
    # if size of min heap less than 3, just add num to it
    # if size == 3: 
        # remove the root (min numbers in the heap) and compare to num 
        # the max of two goes into heap 
# edge: array has less than 3 nums
# At the end, pop root off to return 3rd max IF size == 3
# if less than three, remove all the min-heap's roots until the last num, that's our max

# Runtime is O(n) time and O(1) space, because size 3  

import heapq

# trying to save the max 3 nums in heap
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        min_heap = []
        
        for num in nums:
            if num in min_heap:
                continue
            
            if len(min_heap) < 3: 
                heapq.heappush(min_heap, num)
            elif len(min_heap) == 3: 
                ele = heapq.heappop(min_heap)
                max_num = max(ele, num)
                heapq.heappush(min_heap, max_num)
        
        if len(min_heap) == 3:
            return heapq.heappop(min_heap)
        # if size less than 3, return the max (empty the heap until last num)
        else: 
            while min_heap:
                res = heapq.heappop(min_heap)
            return res