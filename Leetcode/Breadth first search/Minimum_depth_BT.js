/*
Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from 
the root node down to the nearest leaf node.

root = [3,9,20,null,null,15,7]
Output: 2

Strat:
- Use BFS again, but instead of tracking all the nodes in a level, 
just track the depth of the tree. 
As soon as we find the first LEAF (where there is a null in the left or
the right), we've found our minimum depth
*/

// grok. Oct, FB/ Bloomb
var minDepth = function(root) {
    if(root === null) return 0;
    
    let depth = 0,
        queue = [];
    
    queue.push(root);
    
    while(queue.length > 0) {
        let len = queue.length; 
        depth++;
        
        for(let i = 0; i < len; i++) {
            let curr = queue.shift(); // queue: remove 1st ele in queue
            
            // We found our first leaf;
            if(curr.left === null && curr.right === null) {
                return depth;
            }
            // Add left/ right to the queue
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
        }
    }
};

