/*
Find the height of the given binary tree. 

A height of a binary tree is the greatest number of edges between the tree's root and it's furthest leaf. 
Longest root-to-leaf path basically. 

Need to implement a depth first search. 
*/



function node() {
  this.val = val;
  this.left = null;
  this.right = null;
}

function height(root, num) {
  let height = 0;
  
  // Start a dfs at the root
  dfs(root); 

  function dfs(node) {
    if(!node) {return 0};

    // Seach the root's left & right nodes
    const left = dfs(node.left);
    const right = dfs(node.right)

    // Update height at each node 
    height = Math.max(height, left + right)

    // Return the hightest height we've seen
    return Math.max(left, right) + 1
  }
  
  return height; 
}
