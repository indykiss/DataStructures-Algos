/*

Critical connections in a network
... a network from hell 

There are n servers numbered from 0 to n-1 connected by undirected server-to-server 
connections forming a network where connections[i] = [a, b] represents a connection between 
servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.


SAME WAY TO PHRASE THE ABOVE:

You are given an undirected connected graph. An articulation point (or cut vertex) is 
defined as a vertex which, when removed along with associated edges, makes the graph disconnected 
(or more precisely, increases the number of connected components in the graph). The task is to find all 
articulation points in the given graph.

Input: The input to the function/method consists of three arguments:

numNodes, an integer representing the number of nodes in the graph.
numEdges, an integer representing the number of edges in the graph.
edges, the list of pair of integers - A, B representing an edge between the nodes A and B.

Output: Return a list of integers representing the critical nodes.

Example:

Input: numNodes = 7, numEdges = 7, edges = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]
Ouput: [2, 3, 5]

[[0,1], [1,2], [2,3], [2,1], [3,4]] => [3] 

[Write out the graph]


Tip: For two particularly hard tests to pass, you r result should contain edges such that for an edge (a, b) 
a < b. i.e. if you have a critical edge (2,1), change it to (1, 2) when adding to resultant list.
*/

/*
Strategy:
Find the edges that do not lead to a cycle. 
Use a DFS to look at the nodes. 
rank = time stamp of the DFS
minObs = lowest rank seen on the path we're on (as we're traversing)
Ya I have no idea what's going on here. 

*/

const criticalConnections = (n, connections) => {
    // Create the graph to traverse through
    const graph = createGraph(n, connections);

    // Don't traverse over things we've already seen 
    const visited = new Set();
    let rank = 0;
    const output = [];
    
    // Make a DFS function
    function dfs(node, parent) {
        visited.add(node.val);
        // Lowest rank and rank are default rank
        node.rank = rank;
        node.minObs = rank;
        // Increment rank as we go
        rank++;
        // DFS. Don't visit parents. Just visit children nodes 
        node.children.forEach((child) => {
            if(child === parent) {return;}
            // If we've seen the child already, just peek at its value
            if(visited.has(child)) {
                node.minObs = Math.min(node.minObs, graph[child].minObs);
                return;
            } else {                                                                                                      
                // Traverse and update the minObs to take the min value if its min
                node.minObs = Math.min(node.minObs, dfs(graph[child], node.val));
            }
            // If node.rank > child.minObs, the edge between node and child
            // is a bridge since that edge will never lead back to the node itself along the way.
            if (node.rank < graph[child].minObs) output.push([node.val, child]);
        })
        return node.minObs;
    };
    
    dfs(graph[connections[0][0]], connections[0][0]);
    return output;
};


function createGraph(n, connections) {
    const output = {};
    for (let i = 0; i < n; i++) {
        output[i] = { val: i, children: [], rank: -Infinity, minObs: Infinity };
    }
    connections.forEach((connection) => {
        output[connection[0]].children.push(connection[1]);
        output[connection[1]].children.push(connection[0]);
    });
    return output;
}


// N = servers, connections = edges
const criticalConnections = (n, connections) => {

    const graph = graphMaker(n, connections);
    // Track visited servers and essential servers
    const visited = new Set();
    const essential = [];

    // DFS search through the graph
    const dfs = function(s1, s2) {

        visited.add(s1.val);

        s1.kids.forEach(kid => {
            

        })


    }


    dfs(graph[connections[0][0], connection[0][1]])
}


// Make a graph that outputs a hash of hash. server: {val, kids: []}
const graphMaker = function(n, connections) {
    const network = {};
    for(let i = 0; i < n; i++) {
        network[i] = {val: i, kids = []}
    }
    connections.forEach(connect => {
        network[connect[0]].kids.push(connect[1]);
        network[connect[1]].kids.push(connect[0]);
    })
    return network;
}

// [[0,1], [1,2], [2,3], [2,1], [3,4]] => [3] 
// network: { 0: {i, kids: [1]}, 1: {i, kids: [1,2]}  ... }





const criticalConnections = (n, connections) => {
    // Create the graph to traverse through
    const graph = createGraph(n, connections);

    // Don't traverse over things we've already seen 
    const visited = new Set();
    let rank = 0;
    const output = [];
    
    // Make a DFS function
    function dfs(node, parent) {
        visited.add(node.val);
        // Lowest rank and rank are default rank
        node.rank = rank;
        node.minObs = rank;
        // Increment rank as we go
        rank++;
        // DFS. Don't visit parents. Just visit children nodes 
        node.children.forEach((child) => {
            if(child === parent) {return;}
            // If we've seen the child already, just peek at its value
            if(visited.has(child)) {
                node.minObs = Math.min(node.minObs, graph[child].minObs);
                return;
            } else {                                                                                                      
                // Traverse and update the minObs to take the min value if its min
                node.minObs = Math.min(node.minObs, dfs(graph[child], node.val));
            }
            // If node.rank > child.minObs, the edge between node and child
            // is a bridge since that edge will never lead back to the node itself along the way.
            if (node.rank < graph[child].minObs) output.push([node.val, child]);
        })
        return node.minObs;
    };
    
    dfs(graph[connections[0][0]], connections[0][0]);
    return output;
};


function createGraph(n, connections) {
    const output = {};
    for (let i = 0; i < n; i++) {
        output[i] = { val: i, children: [], rank: -Infinity, minObs: Infinity };
    }
    connections.forEach((connection) => {
        output[connection[0]].children.push(connection[1]);
        output[connection[1]].children.push(connection[0]);
    });
    return output;
}
