
/*
Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
   
=> 3

Strat: BFS 
- Make a biggestDepth const, queue [arr].
- Add root to the queue
- While things are in the queue, update depth by adding 1
- Loop through queue.length, ID the curr ele by shifting off top of
queue. Add left/ right to the queue if they exist
- At end, return biggestDepth
*/

var maxDepth = function(root) {
    if(!root) return 0;
    
    let depth = 0, 
        queue = [];
    
    queue.push(root);
    
    while(queue.length > 0) {
        let len = queue.length;
        depth++;
        
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
    return depth;
};







