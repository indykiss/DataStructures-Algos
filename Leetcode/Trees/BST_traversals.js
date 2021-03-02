

/*
Algoexpert

Traverse a BST using:
- In order 
- Preorder
- Postorder

*/


// traverse(left), arr.push(curr.val), traverse(right)
function inOrderTraverse(tree, array) {
    if(tree !== null) {
          inOrderTraverse(tree.left, array); 
          array.push(tree.value);
          inOrderTraverse(tree.right, array);
      }
      return array; 
  }
  
  // arr.push(curr.val), traverse(left), traverse(right)
  function preOrderTraverse(tree, array) {
      if(tree !== null) {
          array.push(tree.value);
          preOrderTraverse(tree.left, array); 
          preOrderTraverse(tree.right, array);
      }
      return array; 
  }
  
  // traverse(left), traverse(right), arr.push(curr.val)
  function postOrderTraverse(tree, array) {
    if(tree !== null) {
          postOrderTraverse(tree.left, array); 
          postOrderTraverse(tree.right, array);
          array.push(tree.value);
      }
      return array; 
  }
  
  // Do not edit the lines below.
  exports.inOrderTraverse = inOrderTraverse;
  exports.preOrderTraverse = preOrderTraverse;
  exports.postOrderTraverse = postOrderTraverse;
  