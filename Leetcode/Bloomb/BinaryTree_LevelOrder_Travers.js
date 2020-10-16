

/*
Binary Tree Level Order Traversal


Given a binary tree, return the level order traversal of its nodes' values. 
(ie, from left to right, level by level).

[3, 9, 20, 9, null, 2, 15, 7]
    3
   / \
  9  20
 /   /  \
 2  15   7

=> [
  [3],
  [9,20],
  [2,15,7]
]

*/

var levelOrder = function(root) {

    if(!root) return [];
    
    let res = [],
        queue = [];
    
    queue.push(root);
    
    // Look at every node
    while(queue.length) {
        let lvl = [],
            len = queue.length;
        
        // Create the nested arr/ levels 
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            lvl.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(lvl);
    }
    return res;
};
