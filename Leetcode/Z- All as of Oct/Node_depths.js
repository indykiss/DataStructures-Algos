

/*
Node depths 

The distance between a node in a BT and the tree's root is called
its depth.

Write a function that takes in a binary tree and returns the 
sum of its nodes depths. 

Each binary tree node has an integer value, a left child node, and 
a right child node. Children nodes can either be binary tree nodes
themselves or none/null. 


     3
    / \
   4   5
  / \
 1   2

 Depths: 6 

*/



function nodeDepths(root, depth = 0) {
	if(!root) return 0; 
		
	return depth + nodeDepths(root.left, depth + 1) +
	nodeDepths(root.right, depth + 1);	
}
