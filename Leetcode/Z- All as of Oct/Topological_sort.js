


/*
Topological Sort of a directed graph 

(a graph with unidirectional edges) is a 
linear ordering of its vertices such that for 
every directed edge (U, V) from vertex U to vertex V, 
U comes before V in the ordering.

Given a directed graph, find the topological ordering of 
its vertices.

Example 1:

Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
Output: Following are the two valid topological sorts for 
the given graph:

1) 3, 2, 0, 1
2) 3, 2, 1, 0

Strat:
- Basically we want to order where if U comes before V, 
we want to output U before V in the ordering. 

Vocab:
- A node that ONLY has outgoing edges is a SOURCE
- A node that ONLY has ingoing edges in a SINK 


Steps:
1. Initialization. Store the graph in adjacency lists,
which means each parent vertex will have a list 
containing all of its children. 
Use a hash map where the key is the parents and the
value is the list of its children. 

2. Build the graph from input and find in-degrees
of all the vertices. 

3. Find all the sources. IE all the hash keys that 
have no edges leading to them. Add these into a 
queue. 

4. For each source, do dis:
    - Add into a sorted list. 
    - Get all children from graph (using hashmap)
    - Decrement in-degree of each child by 1 as we add
    - If a child's in-degree becomes 0, add it as a source
    and thus add into the queue. 

*/

const Deque = require('./collections/deque'); // import deque
// Deque = queue that can insert/ remove eles from 
// either end. VS queue which is can only FIFO

function topological_sort(vertices, edge) {

    let sortedOrder = [];

    if(vertices <= 0) {
        return sortedOrder;
    }

    // 1. Initalize graph 
    let inDegree = Array(vertices).fill(0);
    let graph = Array.fill(vertices).fill(0).map(() => Array());
    // fill graph with arrays; n num of vertices


    // 2. Build graph
    edges.forEach((edge) => {
        let parent = edge[0];
        let child = edge[1];

        graph[parent].push(child); // add child to parent
        inDegree[child]++; // increase child's in
    })

    // 3. Find all sources: if has 0 indegrees = source 
    let sources = new Deque();
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            sources.push(inDegree[0]);
        }
    }

    // 4. For each source, add it to sortedOrder 
    // & subtract 1 from all of its kids's in-degrees
    // if a child's in-degree = zero, add to sources queue
    while(sources.length > 0) {
        let vertex = sources.shift();

        sortedOrder.push(vertex);
        // subtract 1 from all kids
        graph[vertex].forEach((child) => {
            inDegree[child] -= 1;
            if(inDegree[child] === 0) {
                sources.push(child);
            }
        })
    }

    // Edge: We can't sort if graph has cycle 
    if(sortedOrder.length !== vertices) {
        return [];
    }

    return sortedOrder;
}



