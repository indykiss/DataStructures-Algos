// Write a function that tells us if a tree is "superbalanced."

// Superbalanced is a thing we made up.
// A tree is superbalanced if the difference between the depths 
// of any two leaf nodes is no greater than 1. 

// So like this is a short tree. 
  // So check if the distance between the min/ max nodes 
    // is greater than 1. If it so, then no superbalanced

// Depth first search
  // As we go, if path is ever greater than 1, then no go 
  // We pick depth because it's faster, hitting leaves 1st
  // Could've done either for this one.


// Sample binary tree node class
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Strat: Do a depth-first walk through the tree. 
  // Keep track of depths as we go, in an arr.
  // Add depth to the arr, if we haven't seen it already.
  // Not a superbalanced tree:
    // If there's more than 2 dif leaf depths 
    // If there's 2 than are more than 1 apart 
  
// Edge: Like 0 leaves is superbalanced

function isBalanced(treeRoot) {

  // Determine if the tree is superbalanced
  
  if(treeRoot === 0) {
    return true;
  }
  
  // S1: Keep track of all the depths and the nodes 
  const depths = [];
  nodes.push([treeRoot, 0])
  
  // S2: Loop for as long as the nodes exist basically 
  while(node.length) {
    
    // S3: Pop a node and its depth from top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];
    
    // S4: If there is no left or right node of this leave
    if(!node.left && !node.right) {
      // We haz a leaf. Now what's its depth? 
        // If it is new, we add it to our list of depths
      if(depths.indexOf(depth) < 0) {
        depths.push(depth);
      }
      
      // S5: Check if theres's an unbalanced tree 
        // 1. If there's more than 2 different depths 
        // 2. If there's 2 leaf depths that are more than 1 apart
        if(depths.length > 2) {
          return false
        } // Math.abs in case depths[1] is a larger number than [0]
        else if(depths.length === 2 && 
          Math.abs(depths[0] - depths[1] > 1)){
          return false;
        } else {
      // S6: We no haz leaf. Let's keep going down 
        if(node.left) {
          nodes.push([node.left, depth + 1])
        }
        if(node.right) {
          nodes.push([node.right, depth + 1])
        }
      }
  }    
  // S7: If we haven't disqualifed the tree, then it's superbalanced
  return true;
}
