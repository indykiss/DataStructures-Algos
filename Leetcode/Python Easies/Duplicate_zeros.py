
# Duplicate Zeros
# Given a fixed-length integer array arr, 
# duplicate each occurrence of zero, shifting the remaining 
# elements to the right.

# Strategy: 
# If we have a zero, insert a zero at i+1 and pop to remove the num at end 
    # while loop so we can skip 2 when we have a zero to not dupe a zero twice

class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        i = 0
        
        while i < len(arr): 
            if arr[i] == 0: 
                arr.insert(i+1, 0)
                arr.pop()
                i += 2
            else: 
                i += 1