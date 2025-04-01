

# House Robber
# You are a professional robber planning to rob houses along a street. 
# Each house has a certain amount of money stashed, the only constraint 
# stopping you from robbing each of them is that adjacent houses 
# have security systems connected and it will automatically contact 
# the police if two adjacent houses were broken into on the same night.

# Given an integer array nums representing the amount of money of each 
# house, return the maximum amount of money you can rob tonight without 
# alerting the police.

# Input: nums = [1,2,3,1]
# Output: 4
# Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
# Total amount you can rob = 1 + 3 = 4.


# DP. O(n) time and space
class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums: return 0
        # build DP table
        n = len(nums)
        dp = [0] * (n+1)
        # we know at the last house, no profit left
        dp[n] = 0
        # The last hous should be robbed if it can be 
        dp[n-1] = nums[n-1]
        
        # go backwards, dont need n or n-1 so start at n-2 
        for i in range(n-2, -1, -1):
            # max of either the house right behind us
            # OR two steps back AND this house 
            dp[i] = max(dp[i+1], dp[i+2] + nums[i])
        
        # whats our haul 
        return dp[0]


# Greedy: O(n) time and O(1) space
class Solution:
    def rob(self, nums: List[int]) -> int:
        prevMax = 0
        currMax = 0 
        
        for num in nums:
            tmp = currMax 
            currMax = max(prevMax+num, currMax)
            prevMax = tmp 
            
        return currMax