/*
Subtree of Another Tree
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:

   4 
  / \
 1   2
Return true,

Strat:  Search through tree (breadth first traversal).ish. If a parent node 
in our big tree matches the 1st node in our lil subtree, check if 
the next left & right nodes match too. 

Return true if they do. False if not. 

*/


/*
Strat: 
- We need to look thru s to find t. 
- DFS, so we'll use recursion to 
traverse 

Edge:
- t can be empty, s can be empty 
*/


// Close enough but wrong 
var isSubtree = function(s, t) {
    if(!s) return t;

    let node = s, 
        node2 = t; 
            
    if(node.val === node2.val) {
        if(dfs(node, node2)) {
            return true;
        }
    } 
    
    if(node.left && isSubtree(node.left, node2)) {
        return true;
    }

    if(node.right && isSubtree(node.right, node2)) {
        return true;
    }
        
    return false;
}

function dfs(node, node2) {
    // base case 
    if(node === null && node2 === null) {
        return true;
    }        
        
    // Return false if one is done
    if(!node || !node2) {
        return false;
    }   
    // Return false if vals are different
    if(node.val !== node2.val) {
        return false;
    }   
        
    // Recursive action
    return dfs(node.left, node2.left) && 
            dfs(node.right, node2.right);   
}



var isSubtree = function(s, t) {
    // Edge, invalid input
    if(!s) {return t};
    // Did we find a common root? Great! Let's look at the children nodes
    if(s.val === t.val) {
        if(traverse(s,t)) {
            return true;
        }
    }
    // If S's left node exists AND is the same as t's left node, true
    if(s.left && isSubtree(s.left, t)) {
        return true;
    }
    // If S's right node exists AND is the same as t's right node, true
    if(s.right && isSubtree(s.right, t)) {
        return true;
    }
    return false;    
};

var traverse = function(s,t) {
    // IF left and right node are same, true
    if(!s && !t) { return true }
    
    // Edge: There's no s or t value
    if(!s || !t) { return false }
    
    // IF left and right node are DIFFERENT, false
    if(s.val != t.val) { return false }
    
    // Kk now check the new left and right nodes in case subtree has lots of levels
    return traverse(s.left, t.left) && traverse(s.right, t.right);
}
