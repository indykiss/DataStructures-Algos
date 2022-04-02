
# Flipping an Image

# Given an n x n binary matrix image, flip the image horizontally, 
# then invert it, and return the resulting image.

# To flip an image horizontally means that each row of the image is reversed.

# For example, flipping [1,1,0] horizontally results in [0,1,1].
# To invert an image means that each 0 is replaced by 1, and 
# each 1 is replaced by 0.

# For example, inverting [0,1,1] results in [1,0,0].

# Input: image = [[1,1,0],[1,0,1],[0,0,0]]
# Output: [[1,0,0],[0,1,0],[1,1,1]]

# Strategy
# - res list
# - Iterate through the list of pixels 
#     - Flip: Two pointers, one at beg and one at end, swap until they meet
#     - Invert: If 1, make it a 0, if 0, make it 1 
# - Append new pixel to res 
    
class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        res = []
        for pixel in image: 
            # flip 
            temp = []
            start = 0
            end = len(pixel)-1
            while start <= end: 
                [pixel[start], pixel[end]] = [pixel[end], pixel[start]]
                start += 1
                end -= 1
            # invert 
            for num in pixel: 
                if num == 0:
                    temp.append(1)
                else:
                    temp.append(0)
            res.append(temp)
        return res 
        
        
        
        