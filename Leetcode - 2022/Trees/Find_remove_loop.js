

/*
Apl intrvw : March 2021

Find and remove the loop in a BT. 

Can assume exactly 1 loop in BT. 

Strategy:
- Create a set to track children nodes we've seen
- BFS -> queue to track children we've seen 
- Traverse tree
    - Remove ele from queue 
    - If ele.left, 
        - AND it's in the set already, delete relationship 
        between parent & child 
        - If not in set, add to set, and also add to queue 
    - Same with right
- Return tree 

Better strategy: Recursive 
*/


// does not compile correctly, but close? 
function removeLoop(root) {
    let tracker = new Set(), // tracks the children nodes
        que = []; // queue for bfs 

    que.push(root);

    while(que.length > 0) {
        let node = que.shift(); 

        if(node.left) {
            // if we've seen child node, delete relationship
            if(tracker.has(ele.left.value)) {
                node.left = null; 
            } else {
                tracker.add(ele.left.value); 
                que.push(ele.left);
            }
        }
        if(node.right) {
            if(tracker.has(ele.right.value)) {
                node.right = null; 
            } else {
                tracker.add(ele.right.value); 
                que.push(ele.right);
            }
        }       
    }
    return root; // maybe return a copy of the tree instead? 
}