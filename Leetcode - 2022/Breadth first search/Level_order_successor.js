


/*
Level Order Successor

Given a binary tree and a node, find the level order 
successor of the given node in the tree. The level 
order successor is the node that appears right after 
the given node in the level order traversal.

Strat: BFS through tree

1. Vars: queue (arr), foundNode = false
2. Add root to queue
3. While queue has things, iterate thru queue's length
4. Look at 1st item in queue. If it is the foundNode, 
toggle foundNode to true. 
Check if foundNode is true; if it is then we can return item 
Add left / right leaves into queue if they exist 
5. If we never return, return -1 or something 

*/


// Grok, FB/ Bloomb. Oct. NOT a leetcode. 
function levelOrderSuccessor(root, givenNode) {
    let foundNode = false, 
        queue = [];

    queue.push(root);

    while(queue.length > 0) {

        for(let i = 0; i < queue.length; i++) {
            let curr = queue.shift();

            if(foundNode === true) {
                return curr;
            }

            if(curr === givenNode) {
                foundNode = true;
            }

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
}
// O(N) time and O(N) space, bc queue