
# Largest Triangle Area

# Given an array of points on the X-Y plane points where 
# points[i] = [xi, yi], return the area of the largest triangle 
# that can be formed by any three different points. Answers 
# within 10-5 of the actual answer will be accepted.

# Strategy:
#     - Brute force, 3 nested loops, looking at every possible 3 point pairs, check if they can be a triangle (a^2 + b^2 = c^2 helper function). If yes triangle, calculate the area

#     Maybe alternative: Binary search
#         - Sort the points, then look at 1st, midpt, last pt. Check if triangle. 
#         - Not really great. Not sure when we'd need to update floor/ ceiling 

class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        max_area = 0
        
        for x in range(len(points)): 
            x1,y1 = points[x]
            for y in range(x, len(points)): 
                x2,y2 = points[y]
                for z in range(y, len(points)):
                    x3,y3 = points[z]
                    area = abs(0.5*(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)))
                    max_area = max(max_area, area)
                    
        return max_area
                    