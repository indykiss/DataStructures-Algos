

# Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
```
Extremely slow, only passes basic cases - O(n)
    def myPow(self, x: float, n: int) -> float:
        ans = 1
        i = 0
        # negative pow is 1/x^n so just switch 
        # then do math  
        if n < 0:
            x = 1 / x 
            n = -n
        while i < n:
            ans *= x 
            i += 1
        return ans

O(logn) -- Think of n in binary. We can reduce O(n) by halving steps
so if num is even, just multiply ans by itself. If odd, just do x * x,
but either way, we can reduce the num of times we need to multiply stuff by halving
    def myPow(self, x: float, n: int) -> float:
        ans = 1
        # negative pow is 1/x^n so just switch 
        # then do math  
        if n < 0:
            x = 1 / x 
            n = -n
        while n: 
            if n % 2:
              ans *= x
            x *= x
            n //= 2
        return ans
```
