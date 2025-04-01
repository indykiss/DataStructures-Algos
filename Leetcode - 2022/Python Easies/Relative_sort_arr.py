
# Relative Sort Array

# Given two arrays arr1 and arr2, the elements of arr2 are distinct, 
# and all elements in arr2 are also in arr1.

# Sort the elements of arr1 such that the relative ordering of 
# items in arr1 are the same as in arr2. Elements that do not 
# appear in arr2 should be placed at the end of arr1 in ascending order.

# Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
# Output: [2,2,2,1,4,3,3,9,6,7,19]



class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        d = {}
        dif = []
        r = []
        
        # Add keys to dictionary
        for n in arr2:
            if n not in d:
                d[n] = 0
        
        # Determine if num from arr1 goes into dict OR end
        for num in arr1:
            if num in d:
                d[num] += 1
            else:
                dif.append(num)

        dif.sort()
        
        # Add arr2's nums into res the num of occurences
        for n2 in arr2:
            r.extend([n2] * d[n2])
            
        
        return r + dif
            