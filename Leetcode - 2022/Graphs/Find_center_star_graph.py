

# Find Center of Star Graph

# There is an undirected star graph consisting of n nodes labeled 
# from 1 to n. A star graph is a graph where there is one center
# node and exactly n - 1 edges that connect the center node with every other node.

# You are given a 2D integer array edges where each edges[i] = [ui, vi] 
# indicates that there is an edge between the nodes ui and vi. Return 
# the center of the given star graph.


# Find the node that is connected by all
    # Node that is in all the edges

class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        graph = {}
        
        for edge in edges:
            node1 = edge[0]
            node2 = edge[1]
            graph[node1] = 1 + graph.get(node1, 0)
            graph[node2] = 1 + graph.get(node2, 0)
        
        for key, val in graph.items():
            if val == len(edges):
                return key
                