
/*
Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
*/



var lowestCommonAncestor = function(root, p, q) {
    // Find all parents, add them into a map
    let parentMap = new Map();
    findParents(root, parentMap); 
    
    // Pick a node 
    let nodeToCompare = p;
    
    // Traverse through the parentMap
    while(nodeToCompare !== null) {
        // IF we have the least common ancestor, return it
        if(nodeToCompare === root || isChild(nodeToCompare, q)) return nodeToCompare;
        
        // Continue through the parents
        nodeToCompare = parentMap.get(nodeToCompare)
    }
    // IF there's no common ancestors
    return null;
};

// Builds a map of the parent-child relationship
var findParents = function(root, parentMap) {
    if(parentMap.size == 0) {
        parentMap.set(root, null);
    }
    if(root === null) return;
    if(root.left) {
        parentMap.set(root.left, root);
        findParents(root.left, parentMap);
    }
    if(root.right) {
        parentMap.set(root.right, root);
        findParents(root.right, parentMap);
    }      
};

// Returns true IF the node we're comparing is a descendant
// Recursive
var isChild = function(root, q) {
    
    if(root === null) return false
    if(q === root) return true
    
    return isChild(root.left, q) || isChild(root.right, q)
};