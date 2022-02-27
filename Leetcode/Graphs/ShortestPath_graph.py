

# Train Map Problem
# Rail network - consists of number of the Station objects. 
# Stations in the map are bi-directionally connected. 
# Distance between any 2 stations is of same constant distance unit. 
# This implies that shortest distance between any 2 stations depends 
# only on number of stations in between.

# Implement def shortestPath(self, fromStationName, toStationName) 
# method to find shortest path between 2 stations.

# Approach: Use BFS, keeping a track of predecessor paths. 
# Maintain visited nodes to avoid cycle.



def shortestPath(fromStationName, toStationName):
  mapping = {"a": ["b", "c"], "b":["a"], "c": ["a", "d"], "d": ["c"]}
  shortestPath = float('inf')    
  queue = []
  queue.append([fromStationName, 1]) 
  visited = set()
    
  while queue: 
    ele = queue.pop(0)
    visited.add(ele[0])
    stations = mapping[ele[0]]
    currPath = ele[1] 

    for station in stations: 
      if station == toStationName: 
        shortestPath = min(shortestPath, currPath)
      else: 
        if station not in visited:
          queue.append([station, currPath+1])

  return shortestPath 


print(shortestPath("a", "d")) # 2
print(shortestPath("a", "b")) # 1
# edge: no connection between start and end? 