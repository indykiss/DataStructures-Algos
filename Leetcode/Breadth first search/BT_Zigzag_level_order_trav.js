

/*
Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the zigzag level order traversal of 
its nodes' values. (ie, from left to right, then right to left for 
the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]


Strat: BFS, bc we're looking at each level of the binary tree 

1. We want to make a queue, add root to queue
2. As queue is not empty, make a lvl constant and loop from i to 
queue.length, occupying the lvl 
    Add things into level in a zipzag formation. 
    Constant for zigging or zagging? Track which we're doing 
3. Push lvl into res and return res arr.

*/


// Oct, FB/ Bloomb
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    
    let res = [],
        queue = [];
    
    queue.push(root);
    
    let zag = false;
    while(queue.length > 0) {
        
        let lvl = [],
            len = queue.length;
        
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            
            // add into lvl in zig zag
            if(zag === true) {
                lvl.unshift(curr.val);
            } else {
                lvl.push(curr.val);
            }
            
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);   
        }
        res.push(lvl);
        zag = !zag;
    }
    return res;
};
