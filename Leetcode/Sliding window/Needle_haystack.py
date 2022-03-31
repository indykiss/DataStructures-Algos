
# Implement strStr()

# Return the index of the first occurrence of needle in haystack, 
# or -1 if needle is not part of haystack.

# Input: haystack = "hello", needle = "ll"
# Output: 2


class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if haystack == "" and needle == "": return 0
        windowSize = len(needle)
        
        start = 0
        end = windowSize-1
        
        while end < len(haystack): 
            subs = haystack[start: end+1]
            if subs == needle: 
                return start
            start += 1 
            end += 1
            
        return -1
        
        