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






// Write a function to check that a binary 
// tree is a valid binary search tree. 

// Strat: Set up tests to see if a node is a left child. If it is
  // then it must be less than its parent. 
  // Or if it's right, it must be more than parent. 
  // Since we're looking at a branch in each subtree, use DFS
// Do this by using a depth first walk through the tree, 
  // test each node for validity as we go
  // Validity being: node.left < node parent, node.right > node parent
  // We'll use a largest number each node must be greater than 
    // and smallest it be be less then (upper and lower bounds)
  
// Edge: No root = yes a BST

// Two ways to do this. Recursively (pretty but not time/space 
// efficient). AND iteratively. 



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


// Iterative!
function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree

  // S2: Start at root. Make fake lower and upper bounds
  
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY    
  })

  // Depth-first traversal 
  while(nodeAndBoundsStack.length) {
    const{ node, lowerBound, upperBound } = 
      nodeAndBoundsStack.pop();
      
      // Make sure node is valid to continue 
      if(node.value <= lowerBound || node.value >= upperBound) {
        return false;
      }
      
      // If it's a left child node, it has to be smaller than the 
        // current node (parent node)
      if(node.left) {
        nodeAndBoundsStack.push({
          node: node.left,
          lowerBound,
          upperBound: node.value
        });
      }
      
      // if it's a right child node, it must be bigger than parent
      if(node.right) {
        nodeAndBoundsStack.push({
          node: node.right, 
          lowerBound: node.value,
          upperBound
        })
      }
  }
  
  // If all nodes passed the tests, then we have a superbalanced tree
  return true;

}


// Recursive!
// S1: Add a second and third input parameter for lower/upper bounds
function isBinarySearchTree2(treeRoot) {

  // Determine if the tree is a valid binary search tree

  // S2: Start at root. Make fake lower and upper bounds
  lowerBound = Number.NEGATIVE_INFINITY;
  upperBound = Number.POSITIVE_INFINITY;

  // S2b: If tree root doesn't exist, then yes BST
  if(!treeRoot) {
    return true;
  }
  
  //S3:  If treeRoot is not within the bounds, not BST
  if(treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }
  
  // S4: Let's check if the left and right node are in the bounds
    // by recursing ???
  return isBinarySearchTree2(treeRoot.left, lowerBound, treeRoot.value)
    && isBinarySearchTree2(treeRoot.right,  treeRoot.value, upperBound);
}

  
 // O(n) space and O(n) time 
// Smoosh patterns together to get answer 
// It's not about "this is X problem, lets do X"
  // It's a little bit that and a little bit
    // smoosh smoosh smoosh
  
  
  
  
  
  
  
// Write a function to find the 2nd largest element 
// in a binary search tree.

// Start by finding the largest element 
// Since it's a BST, we know that the "rightmost"
// element is going to be the largest 


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

// Find largest iteratively. Keep looking to right child 
// node until one doesnt exist anymore
function findLargest(rootNode) {
  
  if(!rootNode) {
    throw new Error("Needs a node")
  }
  
  let current = rootNode;
  
  // Keep looking for current.right node (largest)
    // once there's not any left, current.value is biggest
  while(current) {
    if(!current.right) {
      return current.value;
    }
    current = current.right;
  }
}


// Start: The 2nd largest node will be the largest' parent 
// EXCEPT IF the largest has a left (no right obvi)
  // no right, bc if it had a right, it wouldn't be 
  // largest subtree. 
// So we have a couple cases here


function findSecondLargest(rootNode) {

  // Find the second largest item in the BST
  
  // Edge: Needs at least 2 nodes
  if(!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error("Needs at least 2 nodes")
  }
  
  let current = rootNode
  
  // S1: We cycle through each node and check on 
    // the situation for that current node
  
  while(current) {
    
    // S2: If we have a left subtree but not a right subtree
      // then current node is the largest, so 2nd
      // largest must be the largest in left subtree
    if(current.left && !current.right) {
      return findLargest(current.left)
    }
      
    // S3: If we have a right child, but that right child
      // node doesn't have any children. 
      // THEN right child is largest AND current is 2nd 
    if(current.right && 
      (!current.right.left && !current.right.right)) {
      return current.value;
    }
    
   // S4: Else, we have a right subtree with >1 ele,
      // so largest/ 2nd largest are somewhere so we 
      // keep on stepping right 
    current = current.right;
  }
}
 

 // O(h) time where h is tree height  
  // if tree is balanced, that means O(lg(n))
  // IF not, O(n) time
// And O(1) space



