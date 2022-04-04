
# Shuffle String
# You are given a string s and an integer array 
# indices of the same length. The string s will 
# be shuffled such that the character at the ith 
# position moves to indices[i] in the shuffled string.
# Return the shuffled string.

# Strategy:
# Create a hash table with indices[i] : s[i]
# From 0 to n, build a new string

class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        clean = ""
        table = {}
        
        for i in range(len(s)): 
            table[indices[i]] = s[i]
        
        j = 0
        while j < len(s): 
            clean += table[j]
            j += 1
            
        return clean