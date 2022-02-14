

# Rectangle Overlap

# An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], 
# where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) 
# is the coordinate of its top-right corner. Its top and bottom edges 
# are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

# Two rectangles overlap if the area of their intersection is positive. 
# To be clear, two rectangles that only touch at the corner or edges do not overlap.

# Given two axis-aligned rectangles rec1 and rec2, return true if they 
# overlap, otherwise return false.


class Solution:
    def isRectangleOverlap(self, rec1: List[int], rec2: List[int]) -> bool:
        
        r1_x1 = rec1[0]
        r1_x2 = rec1[1]
        r1_y1 = rec1[2]
        r1_y2 = rec1[3]
        
        r2_x1 = rec2[0]
        r2_x2 = rec2[1]
        r2_y1 = rec2[2]
        r2_y2 = rec2[3]
        
        x = min(r1_y1, r2_y1) - max(r1_x1, r2_x1)
        
        y = min(r2_y2, rec1[3]) - max(r1_x2, r2_x2)

        return x > 0 and y > 0