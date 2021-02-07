

/*
Clone Graph
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity sake, each node's value is the same as the node's 
index (1-indexed). For example, the first node with val = 1, the 
second node with val = 2, and so on. The graph is represented in 
the test case using an adjacency list.

Adjacency list is a collection of unordered lists used to represent
a finite graph. Each list describes the set of neighbors of a node 
in the graph.

The given node will always be the first node with val = 1. You must 
return the copy of the given node as a reference to the cloned graph.

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
*/



// Using a hash table:
var cloneGraph = function(node) {
    if (!node) return node

    let queue = [node],
        hash = {}

    hash[node.val] = new Node(node.val)

    while (queue.length > 0) {
        const curr = queue.shift();
        curr.neighbors.forEach(n => {
            // if n is not yet visited
            if (hash[n.val] === undefined) {
                // copy n to the new graph
                hash[n.val] = new Node(n.val);
                // enqueue n
                queue.push(n);
            }
            // connect the current new node with its neighbors in the new graph
            hash[curr.val].neighbors.push(hash[n.val]);
        })
    }
    return hash[node.val];
};

// Using a map:
var cloneGraph = function(node) {
    if(node === null) return null;
    
    const map = new Map();

    function clone(root) {
        if (!map.has(root.val)) {
            map.set(root.val, new Node(root.val));
            map.get(root.val).neighbors = root.neighbors.map(clone);
        }
        return map.get(root.val);
  }
  return clone(node);
}



var cloneGraph = function(node, map = new Map()) {
    if(!node) return null; 
    
    let queue = [node];
    map.set(node, new Node(node.val));

    while(queue.length > 0) {
        let root = queue.shift();
        
        for(let n of root.neighbors) {
            // If map doesnt have val, add to existing spot
            if(!map.has(n)) {
                map.set(n, new Node(n.val));
                queue.push(n);
            }
            // If not, add it
            map.get(root).neighbors.push(map.get(n))           
        }
    }
    return map.get(node); 
};




