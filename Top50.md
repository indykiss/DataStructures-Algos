# Find Peak Element
```
A peak element is an element that is strictly greater than its neighbors.
An peak, only in O(log n) time.
    def findPeakElement(self, nums: List[int]) -> int:
            floor = 0
            ceil = len(nums)-1
            while floor < ceil:
                mid = (floor+ceil) // 2
                if nums[mid] < nums[mid+1]: 
                    floor = mid + 1
                else: 
                    ceil = mid 
            return floor
```

### Valid palindrome 
```
# strategy - o(n)
# 2 pointers - left & right 
# only look at alnum vals, check if left == right 
    def isPalindrome(self, s: str) -> bool:     
        left = 0
        right = len(s)-1
        s = s.lower()
        while left < right: 
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1 
            if s[left] != s[right]:
                return False
            left += 1 
            right -= 1       
        return True
```
### Simplify Path
```
# You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.
# strategy - O(n)
# split with / to find the stuff between
# stack to trace  
# either add or remove from stack, based on rules
# join at end with / to return str 
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
