/*
Binary tree right side view 

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
  

Strat:
- Use a BFS solution 
*/


var rightSideView = function(root) {
    // Result array
    const res = [];
    // Edge case
    if(root == null) {return res}
    
    // S1: Breadth first search. 
        // Make a queue to track the children we've seen  
    const queue = [];
    
    // S2: Move root into the queue to start 
    queue.push(root)
    
    // S3: Look through the children
    while(queue.length !== 0) {
        let size = queue.length; 
        
        for(let i = 0; i < size; i++) {
            // Pop off the 1st ele and look at it
            let n = queue.shift();
            
            // If we're at the end and we found it 
            if(i === size - 1) {
                res.push(n.val)
            }
            // If there are left or right children, add them 
                // into the queue for processing 
            if(n.left !== null) {
                queue.push(n.left);
            }
            if(n.right !== null) {
                queue.push(n.right);
            }
        }
    }
    return res;
};

