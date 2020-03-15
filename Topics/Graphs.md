## Graph Data Structure

A graph organizes items in an interconnected network. Each item is a node (or vertex). Each connection is an edge. 

The number of degrees a graph has refers to the number of edges connected to the node. The maximum possible degrees refers to the maximum number of connections to other nodes a node can have. 

In DIRECTED graphs, ie ones with the arrows, there are in-degrees and out-degrees, referring to the arrows pointing to that node and arrows pointing out of that node. 

Pros: Really good when there's connections: Facebook users and friends, cities and highways, etc. 

Cons: Not super time efficient. Bad at scaling. Most graphs are minimum of O(n* lg(n)) time efficiency. 

Directed vs undirected graphs: In directed graphs, there's direction to the edges. A node points to another node. 
In undirected graphs, the edges are arrowless connections. 

Cyclic vs acyclic: If there's a cycle somewhere in the graph (a bunch of nodes connected in a hexagon or a shape of somesort-- unbroken series of nodes that connect to each other), then it's cyclic. No cycles are acyclic. 

Weighted vs unweighted: Instances where the each connection has some sort of weight. Weight could signify distance or cost or time to travel between locations. 

Legal coloring: Basically each node is colored and no adjacent node has the same color. If there are nodes next to each other who are all blue, then that is illegal coloring, for example. 

RN: Graphs can have loops. Essentially a node that's connected to itself (like the line connecting nodes; one line just connects to itself). This can be an edge case for us to consider.

#### Representation of Graphs in code

Edge list: A list of all the edges. Helpful to pair list of nodes with edges, bc sometimes a node isn't connected with an edge. 

          const graph = [[0, 1], [1, 2], [1, 3], [2, 3]];

Adjacency list: A list where the index represents the node and the value is a list of the node's neighbors. 

        const graph = [
          [1],
          [0, 2, 3],
          [1, 3],
          [1, 2],
        ];

We can also use an object to do this, where the key is the node and the value is a list of that node's neighbors. 

          const graph = {
                  0: [1],
                  1: [0, 2, 3],
                  2: [1, 3],
                  3: [1, 2],
          };

Adjacency Matrix: A matrix of 0s and 1s that indicates where the node X is connected to node Y. 0 is no and 1 is yes, of course. 

          const graph = [
          [0, 1, 0, 0],
          [1, 0, 1, 1],
          [0, 1, 0, 1],
          [0, 1, 1, 0],
        ];

Since node 3 has edges to nodes 1 and 2, graph[3][1] and graph[3][2] have value 1. :( 


#### Algos with Graphs

Depth first and breadth first searches will answer alll the questions when it comes to graphs. Like basically. 

###### Is there a path between these two nodes in this undirected graph? 
        Run a depth first search or breadth first search from one node to see if you reach the other. 
        
###### What's the shortest path between these two nodes in an undirected, unweighted graph? 
        Run Breadth first search from one node and backtrack until you reach the second. 
        NOTE that Breadth first always find the shortest path, when the graph is undirected and unweighte. 
        Depth first does not find the shortest path. 
       
###### Can this undirected graph be colored with two colors? 
        Run a breadth first search, assign colors as nodes are visited. 
        Abort if we ever try to assign a node a color that's different from the color it already has. 

###### Does this undirected graph have a cycle? 
        Run a breadth first search and keep track of the number of times we visit a node. 
        If we've seen it, then yes, the graph has a cycle. 



### (Search info goes here too because we LOVE dfs/ bfs in graphs in particular)
## Breadth-first search

Breadth-first search is a way to explore a tree or graph by looking at the nodes one step away, then two steps away. 

Kinda like throwing a stone in a cave pond. You explore the nodes that ripple out from the starting point, until we reach all the nodes.  

Pros: Finds the shortest path between the starting node and any other node. 

Cons: Generally takes more memory than the depth-first search, since we are looking at all the nodes. Breadth and all. 



## Depth-first search (also called depth-first traversal) 

Depth-first search is a way to explore a tree or graph by traveling down one node branch to the end, then turning around if couldn't find the thing, then traveling down another branch, etc, until we find the find we want. 

Kinda like being in a maze and going down each hallway option until we find the exit. 

Pros: DFS generally takes less memory than BFS. 
Can use recursion here pretty easily. 

Cons: Does not find the shortest path to a node. 

Note that BREADTH first uses a queue and DEPTH first uses a stack. 

This will help us decide which of the two to use. 

Are we looking for a solution that would needs a first in, first out (queue! therefore breadth) OR a last in, last out
(stack! therefore depth). Are we visiting nodes in the order we see them (queue) or the last seen node first (stack)? 