

/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1



Strategy: Recursive, Time: O(n) node of trees, Space: O(h), height of tree as call stack
- Base case: When we hit null on left & right subtrees, we're done
Return the tree
- Recursive action: Switch the left & right 

Strategy: BFS, Time: O(n) Space: O(n), bc of queue
- (Breath the Q)
- Add root to the queue
- While anything is in the queue, remove element from it (unshift)
then swap it's left & right values
- Add left & right into queue 
*/


var invertTree = function(root) {
    if(!root) {
        return root;
    }
    
    let left = invertTree(root.left), 
        right = invertTree(root.right); 
    
    [root.left, root.right] = [right, left];
    
    return root;
};


// BFS
var invertTree = function(root) {
    let queue = [];
    queue.push(root); 
    
    while(queue.length > 0) {
        let ele = queue.shift(); 
        
        if(ele !== null) {
            [ele.left, ele.right] = [ele.right, ele.left];             
            queue.push(ele.left, ele.right);        
        }
    }
    
    return root;
}





