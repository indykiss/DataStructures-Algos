
# Hamming Distance

# The Hamming distance between two integers is the number of 
# positions at which the corresponding bits are different.

# Given two integers x and y, return the Hamming distance between them.

# Input: x = 1, y = 4
# Output: 2
# Explanation:
# 1   (0 0 0 1)
# 4   (0 1 0 0)
#        ↑   ↑
# The above arrows point to positions where the corresponding bits are dif.



class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        # convert x and y to bit
        def get_bin (x): 
            return format(x, 'b').zfill(32)
        xBit = get_bin(x)
        yBit = get_bin(y)
        
        # two pointers, one looking at x and y bits 
        # check the num of differences, increment pointers 
        pt1 = 0
        pt2 = 0
        count = 0
        while pt1 < len(xBit):
            if xBit[pt1] != yBit[pt2]:
                count += 1
            pt1 += 1
            pt2 += 1
        
        return count