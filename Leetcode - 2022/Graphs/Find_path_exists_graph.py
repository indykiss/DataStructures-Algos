

# Find if Path Exists in Graph
# Between source and destination nodes 


class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = {} # nodeVal : []
        
        # build graph both edges 
        for edge in edges: 
            n1 = edge[0]
            n2 = edge[1]
            graph[n2] = [n1] + graph.get(n2, [])
            graph[n1] = [n2] + graph.get(n1, [])
            
        # bfs for path 
        q = [source]
        visited = set()
        visited.add(source)
        
        while q:
            curr = q.pop(0)
            if curr == destination: 
                return True 
            for adj_node in graph[curr]:
                if adj_node not in visited:
                    q.append(adj_node)
                    visited.add(adj_node)
                
            
        return False
    
    
    
                
            
            