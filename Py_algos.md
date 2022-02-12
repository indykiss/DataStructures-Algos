
## Javascript -> Python translation notes ##

# Traditional algorithms, Python 
- Recursion*
- Depth first search*
    - Recursive (stack)
    - Stack
- Breadth first search*
    - Normal
    - Level wise
- Binary search
- Dynammic programming*
    - Overlapping subproblems / Memoization
    - MISC
    - THERE'S LOTS I DONT KNOW HERE 
- Greedy 

# Patterns, Python
- Two pointers
    - Two pointers with differing paces
- Sliding window
- Merge intervals
- Top K / Merge K 


# DP
Subproblems are overlapping, so some of the identical steps are needed to solve one sub-problem. 

DP lets us store the results of each step and reuse. 

Memoization is a type of DP. 

DP problem might need top down or bottom up solution. 


# Bottom up dynammic programming 
Tabulation is when we make that nice DP list and add some easy answers to it, then we go from the next step up to n, calculating every step and return that last dp[n] basically. We can use dp[i-1]/d[[i-2]] etc OR other fun loops/ whatever to build what dp[i] is. 

Starts by looking at the smallest possible problem, called the base case, and then working up step by step. As we solve each subproblem, we save it and use it to solve the next lowest subproblem. 

Ex of bottom up tabulation: 
    function fib(n):
        if n == 0: return 0
        if n == 1: return 1
        dp = [0] * (len(arr)+1)
        dp[0] = 1
        dp[1] = 1
        
        for i in range(2, len(arr) + 1): 
            dp[i] = dp[i-1] + dp[i-2]
        
        return dp[n]


# Top down dynammic programming 
Opposite of bottom up DP. 
First looks at the main problem and breaks it down into smaller and smaller subproblems until the base case is reached. This is the most common way of building recursive solutions. 

Memoization is like a top-down DP. Saves info in key/val pairs. Uses recursion but in a way that saves some info so we're not redoing all the same recursive steps over and over again. 

Ex of top down memoization: 
    memo = {}
    function fib(n): 
        
        if n == 0: return 0
        if n == 1: return 1
        elif n in memo:
            return memo[n]
        else:
            memo[n] = fib(n-1) + fib(n-2)
            return memo[n]

# Knapsack: Type of DP problem 



# Sorts
When to use quick sort vs merge sort? 
Depends on the data that we're working with.
Quick sort is faster when we have completely randomized list.
Merge sort does sometimes sort faster in real world applications. 
Ex: when an arr is almost sorted, but not completely, merge sort is faster. 

Merge sort does require extra memory over quick sort, so if we want to save memory, we potentially would go with quick sort. 

Average and worst case for mergesort is o(n log n), while worst case for quick sort is like O(n^2). 

Often times, we go with quick sort to save memory and smartly choose pivot (middle num) to reduce worst case scenario time. 

# Merge sort : recursive  
# We sort half of a list of ints by slicing the list in half and sorting those halves and combining them together. 
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) < 2: return nums
        mid = len(nums)//2
        left = self.sortArray(nums[mid:])
        right = self.sortArray(nums[:mid])
        return self.merge(left, right)
    
    def merge(self, left, right):
        res = []
        while len(left) > 0 and len(right) > 0: 
            if left[0] < right[0]:
                res.append(left[0])
                left.pop(0)
            else:
                res.append(right[0])
                right.pop(0)
        res = res + left + right 
        return res

# Quick sort : recursive 
# Not actually a great quicksort because we have the 2 lists 
# but broadly close

class Solution:
    def quickSort(self, arr: List[int], left: int, right: int) -> List[int]:
        if left <= right: return 
        pivot = arr[left+right//2]
        idx = partition(arr, left, right, pivot)
        quickSort(arr, left, idx-1)
        quickSort(arr, idx, right)
    def partition(self, arr: List[int], left: int, right: int, pivot: int): 
        while left <= right:
            while arr[left] < pivot:
                left += 1
            while arr[right] > pivot:
                right -= 1
            if left <= right:
                swap(arr, left, right)
                # swapping is important because saving space
                left += 1
                right -= 1
        return left 

# Quick sort that passes tests on LC:
class Solution:
    def sortArray(self, arr: List[int]) -> List[int]:
        
        def quicksort(arr, low, high):
            if low >= high: return
            p = partition(arr, low, high)
            quicksort(arr, low, p-1), 
            quicksort(arr, p + 1, high)
        
        def partition(arr, low, high):
            # swap median with pivot
            mid = (low + high) // 2
            arr[high], arr[mid] = arr[mid], arr[high]
            i = low - 1

            for j in range(low, high):
                if arr[j] < arr[high]: 
                    i = i + 1
                    arr[i], arr[j] = arr[j], arr[i]
                    
            arr[high], arr[i+1] = arr[i+1], arr[high]
            return i + 1
        
        quicksort(arr, 0, len(arr) - 1)
        return arr