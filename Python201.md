### Two pointers
```
# One input, opposite ends
def fn(arr):
    left = ans = 0
    right = len(arr) - 1
    while left < right:
        # do some logic here with left and right
        if CONDITION:
            left += 1
        else:
            right -= 1
    return ans

# Two inputs, exhaust both 
def fn(arr1, arr2):
    i = j = ans = 0
    while i < len(arr1) and j < len(arr2):
        # do some logic here
        if CONDITION:
            i += 1
        else:
            j += 1
    while i < len(arr1):
        # do logic
        i += 1
    while j < len(arr2):
        # do logic
        j += 1
    return ans
```
### Sliding window 
```
def fn(arr):
    left = ans = curr = 0
    for right in range(len(arr)):
        # do logic here to add arr[right] to curr
        while WINDOW_CONDITION_BROKEN:
            # remove arr[left] from curr
            left += 1
        # update ans
    return ans
```
### Prefix sum 
```
def fn(arr):
    prefix = [arr[0]]
    for i in range(1, len(arr)):
        prefix.append(prefix[-1] + arr[i])
    return prefix
```
### Linked List pointers
```
def fn(head):
    slow = head
    fast = head
    ans = 0
    while fast and fast.next:
        # do logic
        slow = slow.next
        fast = fast.next.next
    return ans
```
### Reverse linked list 
```
def fn(head):
    curr = head
    prev = None
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node 
    return prev
```
### DFS, recursive, binary tree
```
def dfs(root):
    if not root:
        return
    
    ans = 0
    # do logic
    dfs(root.left)
    dfs(root.right)
    return ans
```
### DFS, iterative, binary tree
```
def dfs(root):
    stack = [root]
    ans = 0
    while stack:
        node = stack.pop()
        # do logic
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)
    return ans
```
### BFS, binary tree
```
from collections import deque

def fn(root):
    queue = deque([root])
    ans = 0
    while queue:
        current_length = len(queue)
        # do logic for current level

        for _ in range(current_length):
            node = queue.popleft()
            # do logic
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return ans
```
### DFS, recursive, graph
```
For the graph templates, assume the nodes are numbered from 0 to n - 1 and the graph is given as an adjacency list.
Depending on the problem, you may need to convert the input into an equivalent adjacency list before using the templates.

def fn(graph, start_node):
    seen = {START_NODE}

    def dfs(node):
        ans = 0
        # do some logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                ans += dfs(neighbor)
        return ans

    return dfs(START_NODE)
```
### DFS, iterative, graph
```
def fn(graph, start_node):
    stack = [START_NODE]
    seen = {START_NODE}
    ans = 0
    while stack:
        node = stack.pop()
        # do some logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                stack.append(neighbor)
    return ans
```
### BFS, graph 
```
from collections import deque
def fn(graph, start_node):
    queue = deque([START_NODE])
    seen = {START_NODE}
    ans = 0
    while queue:
        node = queue.popleft()
        # do some logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                queue.append(neighbor)
    return ans
```

### Top k eles with heap
```
import heapq

def fn(arr, k):
    heap = []
    for num in arr:
        # do some logic to push onto heap according to problem's criteria
        heapq.heappush(heap, (CRITERIA, num))
        if len(heap) > k:
            heapq.heappop(heap)
    return [num for num in heap]
```
### Binary search
```
def fn(arr, target):
    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            # do something
            return
        if arr[mid] > target:
            right = mid - 1
        else:
            left = mid + 1
    # left is the insertion point
    return left
```
### Binary search, greedy 
```
def fn(arr):
    def check(x):
        # this function is implemented depending on the problem
        return BOOLEAN

    left = MINIMUM_POSSIBLE_ANSWER
    right = MAXIMUM_POSSIBLE_ANSWER
    while left <= right:
        mid = (left + right) // 2
        if check(mid):
            right = mid - 1
        else:
            left = mid + 1
    
    return left # If looking for a minimum
    # or return right, if looking for a max

```

### Find subarr that fit a thing 
```
from collections import defaultdict

def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0
    for num in arr:
        # do logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1
    return ans
```




