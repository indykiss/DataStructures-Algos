

# Sqrt(x)
# Given a non-negative integer x, compute and return the square root of x.

# Since the return type is an integer, the decimal digits are truncated, 
# and only the integer part of the result is returned.

# Note: You are not allowed to use any built-in exponent function or 
# operator, such as pow(x, 0.5) or x ** 0.5.

# Input: x = 4
# Output: 2
# Example 2:

# Input: x = 8
# Output: 2
# Explanation: The square root of 8 is 2.82842..., and since the 
# decimal part is truncated, 2 is returned.


class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        
        left, right = 2, x // 2
        
        while left <= right:
            pivot = left + (right - left) // 2
            num = pivot * pivot
            if num > x:
                right = pivot -1
            elif num < x:
                left = pivot + 1
            else:
                return pivot
            
        return right