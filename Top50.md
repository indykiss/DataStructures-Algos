

### Kth Largest Element in an Array 
```
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

import heapq 

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        hea = []

        for num in nums: 
            if len(hea) < k:
                heapq.heappush(hea, num)
            else:
                if hea[0] < num:
                    heapq.heappop(hea)
                    heapq.heappush(hea, num)
                   
        return hea[0]
```
### Minimum Remove to Make Valid Parentheses
```
Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so
that the resulting parentheses string is valid and return any valid string.

    def minRemoveToMakeValid(self, s: str) -> str:
        first = []
        balance = 0
        open_so_far = 0

        # remove all invalid closer
        for c in s:
            if c == "(":
                open_so_far += 1
                balance += 1
            if c == ")":
                if balance == 0:
                    continue 
                balance -= 1
            first.append(c)
        
        # remove as many left most bad openers 
        res = []
        open_to_keep = open_so_far - balance 
        for ch in first:
            if ch == "(": 
                open_to_keep -= 1
                if open_to_keep < 0: 
                    continue
            res.append(ch)
        
        return "".join(res)
```

### Binary Tree Vertical Order Traversal
```
Given the root of a binary tree, return the vertical order traversal of its nodes' values.
(i.e., from top to bottom, column by column).
    def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None: return []
        column_map = defaultdict(list) 
        min_col, max_col = 0, 0 
        def dfs(node, row, col):
            nonlocal min_col, max_col 
            if not node:
                return 
            column_map[col].append((row, node.val))
            min_col = min(col, min_col)
            max_col = max(col, max_col)
            dfs(node.left, row+1, col-1)
            dfs(node.right, row+1, col+1)
        dfs(root, 0, 0)
        res = [] 
        for col in range(min_col, max_col+1):
            column_map[col].sort(key=lambda x: x[0])
            vals = [val for row, val in column_map[col]]
            res.append(vals)
        return res
```

### Binary Search Tree Iterator 
```
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        self.sorted_nodes = []
        self.pointer = -1
        self.flatten_inorder(root)
    def flatten_inorder(self, root: TreeNode) -> None:
        if not root: return 
        self.flatten_inorder(root.left)
        self.sorted_nodes.append(root.val)
        self.flatten_inorder(root.right)
    def next(self) -> int:
        self.pointer += 1
        return self.sorted_nodes[self.pointer]
    def hasNext(self) -> bool:
        return len(self.sorted_nodes) > self.pointer + 1
```

### Continuous Subarray Sum 
```
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
A good subarray is a subarray where: its length is at least two, and the sum of
the elements of the subarray is a multiple of k.

# strategy - O()
# trick: if we add up nums and take the remainder when dividing by k, 
# then we see this remainder again, then we know we can divide the subarr sum 
# by k without any leftover num
# 1. dictionary to track remainders
# 2. if we see same remainder twice, done
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        remainder_map = {0: -1} # idx : sumOfAllBefore 
        # intialize so our i - (-1) gives us i + 1, so can 
        # count 1st ele in subarr
        total = 0 

        for i, num in enumerate(nums):
            total += num 
            rem = total % k
            if rem in remainder_map: 
                # confirm len is at least 2
                if i - remainder_map[rem] > 1: 
                    return True
            else:
                remainder_map[rem] = i
        return False
```


### Valid Number 
```
Given a string s, return whether s is a valid number.
For example, all the following are valid numbers:
"2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3",
"3e+7", "+6e-1", "53.5e93", "-123.456e789",
while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

# o(n)
# ok so we have rules. no strategy, just iterate and check if our rules have been breached 
# real nums require a number 
# e or E is exponent, which is ok, if we've seen a number first. can only have 1 
# floats, we can have 1 dot only and only if num before and after 
# we can have 1 sign at beg or after an exponent 
# we need actual numbers 
    def isNumber(self, s: str) -> bool:
        haveNum, haveExp, haveDot = False, False, False 
        for i, ele in enumerate(s):
            if ele.isdigit(): 
                haveNum = True
            elif ele == "e" or ele == "E": 
                if haveExp or not haveNum:
                    return False
                haveExp = True 
                haveNum = False # reset to false bc need a new num
            elif ele == ".":
                if haveDot or haveExp: 
                    return False
                haveDot = True 
            elif ele == "+" or ele == "-":
                if i > 0 and s[i-1] != "e" and s[i-1] != "E":
                    return False 
            else:
                return False
        return haveNum
```

### Copy List with Random Pointer
```
A linked list of length n is given such that each node contains an
additional random pointer, which could point to any node in the list.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nod
# o(n) strategy
# make a dictionary to initialize with new nodes 
# add the connections from newNode-> other newNode from old linked list 
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head is None: return None
        # intialize dictionary 
        h = head 
        mapping = {} # oldNode : newNode 
        while h:
            mapping[h] = Node(h.val, None, None) 
            h = h.next
        # create the connections 
        h = head 
        while h: 
            if h.next: 
                mapping[h].next = mapping[h.next]
            if h.random: 
                mapping[h].random = mapping[h.random]
            h = h.next 
        return mapping[head] # return the newHead basically, with full linked list behind it 
```

### Find Peak Element
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
### Find Peak Element II 
```
Find peak in a matrix, basically. Must be O(m log n)
Use binary search on columns, picking the middle column each time.
In that column, find the row with the max value — if it’s a peak
compared to its left and right neighbors, return it; otherwise,
move the search to the side with the larger neighbor.
    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:
        m, n = len(mat), len(mat[0])
        low, high = 0, n - 1

        while low <= high:
            mid = (low + high) // 2
            row = max(range(m), key=lambda i: mat[i][mid])
            left = mat[row][mid-1] if mid > 0 else -1
            right = mat[row][mid+1] if mid < n-1 else -1
            if left < mat[row][mid] > right:
                return [row, mid]
            elif mat[row][mid] < left:
                high = mid - 1
            else:
                low = mid + 1

        return [-1, -1]

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
# You are given an absolute path for a Unix-style file system,
which always begins with a slash '/'. Your task is to transform this
absolute path into its simplified canonical path.
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
