"""
Restore the Array From Adjacent Pairs
There is an integer array nums that consists of n unique elements, 
but you have forgotten it. However, you do remember every pair of 
adjacent elements in nums.

You are given a 2D integer array adjacentPairs of size n - 1 where 
each adjacentPairs[i] = [ui, vi] indicates that the elements ui 
and vi are adjacent in nums.

It is guaranteed that every adjacent pair of elements nums[i] and 
nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] 
or [nums[i+1], nums[i]]. The pairs can appear in any order.

Return the original array nums. If there are multiple solutions, 
return any of them.

Example 1:

Input: adjacentPairs = [[2,1],[3,4],[3,2]]
Output: [1,2,3,4]
Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order.


"""

class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        
        # build an edge-list / graph 
        graph = collections.defaultdict(list)
        for i, j in adjacentPairs: 
            graph[i].append(j)
            graph[j].append(i) 
            
        # start and end nodes point to only 1 node
        # middle nodes will point to 2 nodes
        # find the start 
        start = None 
        for i in graph.keys():
            if len(graph[i]) == 1:
                start = i 
                
        # DFS to find the path/ missing num arr
        res = []
        seen = set()
        def dfs(num):
            seen.add(num)
            for next_node in graph[num]:
                if next_node not in seen:
                    dfs(next_node)
            res.append(num)
        
        # dfs on the start num and return res
        dfs(start)
        return res
        
        
        
        