/*
Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).


Strategy:
- Res = [[0], [1]]
- Level order BFS to get all the vals each levels 
- Iterate thru the levels, find the longest length of level, return that 
*/


var maxDepth = function(root) {
    if(!root) return [];
    
    let maximum = 0;
        
    // preorder : parent node -> left -> right 
    function traverse(root, depth) {
        if(root == null) {
            return depth; 
        }
        depth++;
        
        maximum = Math.max(maximum, depth);
        
        root.children.forEach(child => {
            traverse(child, depth);
        })   
    }
    
    traverse(root, 0)
    
    return maximum;
};




