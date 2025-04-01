
/*

Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.


    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 
9 and 15 respectively. Return 24.


Strategy: BFS
Time/ complexity: O(n) time. O(n) space
- Vars: queue, sum 
- Add root to queue
  - While q.len
    - Remove 1st ele in que 
    - If(ele.left) sum += ele.left.val 
    - If left/ right exists, add to queue
​
*/

var sumOfLeftLeaves = function(root, isLeft = false) {
    if(root === null) return 0;
    
    if(!root.left && !root.right && isLeft) return root.val; 
    
    return sumOfLeftLeaves(root.left, true) 
    + sumOfLeftLeaves(root.right, false); 
} 


function summingLeftNodes(root) {
    if(!root) return 0;
    let queue = [], 
        sum = 0; 

    queue.push(root); 

    while(queue.length > 0) {

    let ele = queue.shift(); 

    if(ele.left) {
        sum += ele.left.val; 
    }

    if(ele.right) queue.push(ele.right);
    if(ele.left) queue.push(ele.left);
  }

  return sum; 
}
