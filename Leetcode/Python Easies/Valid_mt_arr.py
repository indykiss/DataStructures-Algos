
# Valid Mountain Array

# Given an array of integers arr, return true if and only if it is 
# a valid mountain array.

# 1 peak and zero valleys 


# Strategy:
# Iterate and count peaks/ valleys
# Only one peak in the array of nums and 1 valley

class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        peaks = 0 
        valleys = 0
        i = 1
        
        while i < len(arr)-1: 
            if arr[i-1] < arr[i] and arr[i] > arr[i+1]: 
                peaks += 1
            if arr[i-1] >= arr[i] and arr[i] <= arr[i+1]: 
                valleys += 1
            i += 1

        return peaks == 1 and valleys == 0
                
                
            