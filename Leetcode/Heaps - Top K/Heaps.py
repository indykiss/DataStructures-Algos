


# Last Stone Weight

# Input: stones = [2,7,4,1,8,1]
# Output: 1
# Explanation: 
# We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
# we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
# we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
# we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.


# Making a min heap: 
import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        
        # make a heap with stones 
        heap = stones 
        heapq.heapify(heap)
        
        while len(heap) != 1:
            largest = heapq.heappop(heap)
            second = heapq.heappop(heap)
            remain = abs(largest - second)
            heapq.heappush(heap, remain)
            print(heap)
            
        return heap[0]


# Making a max heap: 
import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        
        # make a heap with stones 
        heap = stones 
        heapq.heapify(heap)
        
        while len(heap) != 1:
            largest = heapq.heappop(heap)
            second = heapq.heappop(heap)
            remain = abs(largest - second)
            heapq.heappush(heap, remain)
            print(heap)
            
        return heap[0]