

# Course Schedule
# There are a total of numCourses courses you have to take, labeled from 0 
# to numCourses - 1. You are given an array prerequisites where 
# prerequisites[i] = [ai, bi] indicates that you must take course bi 
# first if you want to take course ai.

# For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
# Return true if you can finish all courses. Otherwise, return false.

# numCourses = 2, prerequisites = [[1,0],[0,1]]
# Output: false
# Explanation: There are a total of 2 courses to take. 
# To take course 1 you should have finished course 0, and to 
# take course 0 you should also have finished course 1. So it is impossible.

# Cycle detection with making an adjacency list, then DFS on all the courses from 0 to numCourses
class Solution:
    def canFinish(self, numCourses: int, prereqs: List[List[int]]) -> bool:
        # make an adjacency graph
        graph = defaultdict(list)
            
        for course, prereq in prereqs:
            graph[course].append(prereq)
        
        # DFS through adjacency graph to find cycle 
        # need to check if we can eliminate the prereqs in our dictionary
        visited = set()
        def dfs(crs):
            nonlocal graph
            # if we are finding a cycle
            if crs in visited: 
                return False 
            # no prereqs left
            if not graph[crs]:
                return True
            
            visited.add(crs)
            for prereq in graph[crs]:
                if not dfs(prereq): return False 
            
            visited.remove(crs) # not looking at anymore
            graph[crs] = [] # returns true bc we looked at this already
            return True 
            
        # call dfs for all the courses if graph isnt connected
        for crs in range(numCourses): 
            if not dfs(crs): 
                return False
            
        return True
        
        
        

# Course Schedule II 

# There are a total of numCourses courses you have to take, labeled 
# from 0 to numCourses - 1. You are given an array prerequisites where 
# prerequisites[i] = [ai, bi] indicates that you must take course bi 
# first if you want to take course ai.

# For example, the pair [0, 1], indicates that to take course 0 you 
# have to first take course 1.
# Return the ordering of courses you should take to finish all courses. 
# If there are many valid answers, return any of them. If it is impossible 
# to finish all courses, return an empty array.


# Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
# Output: [0,2,1,3]
# Explanation: There are a total of 4 courses to take. To take course 3 
# you should have finished both courses 1 and 2. Both courses 1 and 2 
# should be taken after you finished course 0.
# So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].



# Basic idea. Need way more graph practice
# Topological sort 
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = defaultdict(list)
        
        for crs, pre in prerequisites:
            adj[crs].append(pre)
        
        courses_ordered = []
        visited = {}
        
        def dfs(adj, crs): 
            nonlocal visited
            visited[crs] = True 
            for pre in adj[crs]:
                if pre not in visited:
                    dfs(adj, pre)
                else: 
                    if pre in visited and visited[pre]:
                        return 
            courses_ordered.append(crs)
            visited[crs] = False
            
        for i in range(numCourses): 
            if i not in visited:
                dfs(adj, i)
            
        return courses_ordered if len(courses_ordered) == numCourses else []
    
    


