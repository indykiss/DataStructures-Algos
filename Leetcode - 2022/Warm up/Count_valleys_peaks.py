Count Hills and Valleys in an Array

You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

Return the number of hills and valleys in nums.

Ex
Input: nums = [2,4,1,1,6,5]
Output: 3
Explanation:
At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill. 
At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley. 

class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        # iterate through, look left and right for 
        # closest non zero neighbor
        # check if left neigh is small and right is big 

        count = 0
        for i in range(1, len(nums)-1):
            left = i - 1
            right = i + 1

            # if plains, move lefter neighbor over
            if nums[i] == nums[i+1]:
                nums[i] = nums[i-1]

            # hill
            if nums[left] < nums[i] and nums[right] < nums[i]:
                count += 1

            # valley 
            if nums[left] > nums[i] and nums[right] > nums[i]:
                count += 1
            
        return count                                                      
