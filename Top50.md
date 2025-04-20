
### # Simplify Path
```
# You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.
# strategy - O(n)
# split with / to find the stuff between
# stack to trace  
# either add or remove from stack, based on rules
# join at end with / to return str 

class Solution:
    def simplifyPath(self, path: str) -> str:
        arr = path.split("/")
        stack = []

        for ele in arr: 
            if ele == "" or ele == ".":
                continue 
            elif ele == "..":
                if len(stack):
                    stack.pop()
            else: 
                stack.append(ele)
        
        return "/" + "/".join(stack)
```
### Merge intervals
```
#O(log n * n)
#- Sort by start time 
#- Iterate, check if start of i+1 is before the end time of i, 
#merge
#- Go backwards 1 to consider new interval 
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        sortedIntervals = sorted(intervals, key=lambda x: x[0])
        merge = [sortedIntervals[0]]
        
        for curr in sortedIntervals:
            last = merge[-1]
            new = last
            if curr[0] <= last[1]:
                start = last[0]
                end = max(last[1], curr[1])
                del merge[-1]
                merge.append([start, end])
            else:
                merge.append(curr) 
        return merge
```

### Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
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
