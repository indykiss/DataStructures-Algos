
/*
Boundary of Binary Tree

The boundary of a binary tree is the concatenation of the root, 
the left boundary, the leaves ordered from left-to-right, and 
the reverse order of the right boundary.


Strat:
- Boundary: 
  - root, outer most nodes on each 
  level (left most and right most)
  and all the nodes at the bottom

*/

var boundaryOfBinaryTree = function(root) {
    if(!root) return [];
    if(!root.left && !root.right) return [root.val]; 
    
    let res = [root.val]; 
    
    buildLeft(root.left, res); 
    
    buildBottom(root, res); 
    
    let rightArr = []; 
    buildRight(root.right, rightArr); 
    
    return [...res, ...rightArr.reverse()];
};

var buildLeft = function(node, res) {
    if(!node) return; 
    
    if(node.left || node.right) {
        res.push(node.val); 
    }
    
    if(node.left) {
        buildLeft(node.left, res); 
    } 
}

var buildRight = function(node, res) {
    if(!node) return; 
    
    if(node.left || node.right) {
        res.push(node.val); 
    }
    
    if(node.right) {
        buildRight(node.right, res); 
    } 
}

var buildBottom = function(node, res) {
    if(!node) return; 
    
    if(!node.left && !node.right) {
        res.push(node.val); 
    }
    buildBottom(node.left, res); 
    buildBottom(node.right, res);
}
