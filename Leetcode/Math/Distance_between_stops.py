
# Distance Between Bus Stops

# A bus has n stops numbered from 0 to n - 1 that form a 
# circle. We know the distance between all pairs of neighboring 
# stops where distance[i] is the distance between the stops 
# number i and (i + 1) % n.

# The bus goes along both directions i.e. clockwise 
# and counterclockwise.

# Return the shortest distance between the given start
# and destination stops.

# Strategy:
# - Make the start the minimum of the two 
# - Make the end the max of the two
# - Calculate the distance of start:end 
# - Calculate the distance of :start + end: 
# - Return the minimum of the two

class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int, end: int) -> int:
        start, end = min(start, end), max(start, end)
        
        d1 = sum(distance[start:end])
        d2 = sum(distance[:start]) + sum(distance[end:])
        
        return d1 if d1 < d2 else d2 
    
    
    