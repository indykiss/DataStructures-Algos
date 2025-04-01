


# Positions of Large Groups

# In a string s of lowercase letters, these letters form consecutive groups of the same character.

# For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

# A group is identified by an interval [start, end], where start and end 
# denote the start and end indices (inclusive) of the group. In the above 
# example, "xxxx" has the interval [3,6].

# A group is considered large if it has 3 or more characters.

# Return the intervals of every large group sorted in increasing order by start index.


# Input: s = "abbxxxxzzy"
# Output: [[3,6]]
# Explanation: "xxxx" is the only large group with start index 3 and end index 6.


class Solution:
    def largeGroupPositions(self, S: str) -> List[List[int]]:
        ans = []
        i = 0 # The start of each group
        for j in range(len(S)):
            if j == len(S) - 1 or S[j] != S[j+1]:
                # Here, [i, j] represents a group.
                if j-i+1 >= 3:
                    ans.append([i, j])
                i = j+1
        return ans
    
    
# IDK why this isn't passing
class SolutionNo:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
        if len(s) == 0: return []
        res = []
        
        start = 0 
        currChar = s[0]
        
        for end in range(1, len(s)): 
            if s[end] != currChar: 
                if end-start >= 3: 
                    res.append([start, end-1])
                currChar = s[end]
                start = end
                        
        return res 
            